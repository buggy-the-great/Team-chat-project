"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ReactNode } from "react";

export default function ConfettiButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  function celebrate(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    };
    const colors = ["#e9c349", "#fda4af", "#ffffff", "#af8d11", "#ffb2bb"];
    confetti({ particleCount: 90, spread: 70, origin, colors, startVelocity: 40 });
    confetti({ particleCount: 60, spread: 120, origin, colors, startVelocity: 55, scalar: 0.7 });
    setTimeout(() => {
      confetti({ particleCount: 50, spread: 100, origin, colors, startVelocity: 35, scalar: 1.2 });
    }, 200);
  }

  return (
    <motion.button
      onClick={celebrate}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      className={`shimmer-btn relative overflow-hidden ${className}`}
    >
      {children}
    </motion.button>
  );
}
