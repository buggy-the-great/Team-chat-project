"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function TopBar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 right-0 w-full md:w-[calc(100%-288px)] z-50 flex justify-between items-center px-gutter py-4 bg-surface/80 backdrop-blur-xl border-b border-secondary/10 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="font-headline-sm text-headline-sm text-secondary tracking-tight italic">
          {siteConfig.tagline}
        </span>
      </div>
      <div className="flex items-center gap-5">
        <motion.span
          whileHover={{ scale: 1.2, rotate: 8 }}
          className="material-symbols-outlined text-secondary cursor-pointer"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.2, rotate: -8 }}
          className="material-symbols-outlined text-secondary cursor-pointer"
        >
          celebration
        </motion.span>
      </div>
    </motion.header>
  );
}
