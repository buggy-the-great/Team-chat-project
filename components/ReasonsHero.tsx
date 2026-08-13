"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import { reasons } from "@/lib/site-config";

export default function ReasonsHero() {
  const feature = reasons[0];
  const next = reasons.slice(1, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[260px]">
      <Reveal className="md:col-span-8 md:row-span-2">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass-card rounded-3xl p-10 md:p-12 flex flex-col justify-end relative overflow-hidden h-full"
        >
          <div className="absolute top-0 right-0 p-8 text-secondary/15 select-none">
            <span className="text-[110px] font-display-lg leading-none">01</span>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/assets/reasons-hero.png"
              alt="Amber-lit desk"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <span
              className="material-symbols-outlined text-secondary text-5xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">{feature.title}</h3>
            <p className="text-body-lg text-on-surface-variant max-w-lg">{feature.body}</p>
          </div>
        </motion.div>
      </Reveal>

      <Reveal direction="right" className="md:col-span-4 md:row-span-3">
        <div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <span className="font-label-md text-secondary/50">#02 — #05</span>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Your Heart for Growth</h4>
            <div className="space-y-5 mt-6">
              {next.map((r) => (
                <div key={r.n} className="flex gap-4">
                  <span className="text-secondary font-bold shrink-0">{String(r.n).padStart(2, "0")}.</span>
                  <p className="text-on-surface-variant">{r.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
