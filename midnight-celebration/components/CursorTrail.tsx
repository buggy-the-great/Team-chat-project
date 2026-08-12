"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number; id: number };

export default function CursorTrail() {
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState<Point[]>([]);
  const idRef = useRef(0);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enabled.current) return;

    let lastSpawn = 0;

    function handleMove(e: MouseEvent) {
      setDot({ x: e.clientX, y: e.clientY });
      const now = Date.now();
      if (now - lastSpawn > 60) {
        lastSpawn = now;
        const id = idRef.current++;
        setSparkles((prev) => [...prev.slice(-14), { x: e.clientX, y: e.clientY, id }]);
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden="true">
      <div
        className="absolute w-5 h-5 rounded-full border border-secondary/70 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${dot.x - 10}px, ${dot.y - 10}px)` }}
      />
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-secondary animate-[fadeOutSparkle_0.8s_ease-out_forwards]"
          style={{ left: s.x, top: s.y }}
        />
      ))}
      <style jsx global>{`
        @keyframes fadeOutSparkle {
          0% {
            opacity: 0.9;
            transform: scale(1) translate(-50%, -50%);
          }
          100% {
            opacity: 0;
            transform: scale(0.2) translate(-50%, -50%) translateY(-16px);
          }
        }
      `}</style>
    </div>
  );
}
