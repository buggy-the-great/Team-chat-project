"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getDiff(since: Date) {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - since.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function LiveCounter({ since }: { since: string }) {
  // Start at zero on both server and client so the very first render always
  // matches (avoids a hydration mismatch from server/client clock skew).
  const [time, setTime] = useState(ZERO);

  useEffect(() => {
    const sinceDate = new Date(since);
    setTime(getDiff(sinceDate));
    const id = setInterval(() => setTime(getDiff(sinceDate)), 1000);
    return () => clearInterval(id);
  }, [since]);

  const units: { label: string; value: number; gold?: boolean }[] = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds, gold: true },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <motion.span
            key={u.value}
            initial={{ opacity: 0.4, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`text-5xl md:text-7xl font-display-lg tabular-nums ${
              u.gold ? "text-secondary" : "text-on-surface"
            }`}
          >
            {String(u.value).padStart(2, "0")}
          </motion.span>
          <span className="text-on-surface-variant font-label-md uppercase mt-2 tracking-widest text-xs">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}