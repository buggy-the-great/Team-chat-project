"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -60 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const words = siteConfig.heroTitle.split(" ");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Floating gold orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-secondary/10 blur-[100px]"
        style={{ top: "10%", left: "12%" }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-tertiary/10 blur-[120px]"
        style={{ bottom: "8%", right: "10%" }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-secondary/10 blur-[90px]"
        style={{ top: "45%", right: "25%" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 border border-secondary/30 gold-glow"
        >
          <span
            className="material-symbols-outlined text-secondary text-4xl animate-pulse-glow"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          style={{ perspective: 600 }}
          className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-4 tracking-tight flex flex-wrap justify-center gap-x-4"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-flex">
              {word.split("").map((ch, j) => (
                <motion.span key={j} variants={letter} className="inline-block">
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-xl mx-auto italic"
        >
          {siteConfig.heroSubtitle}
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary/40"
      >
        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
}
