"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import type { Letter } from "@/lib/site-config";

export default function LetterCard({
  letter,
  index,
  onOpen,
}: {
  letter: Letter;
  index: number;
  onOpen: (letter: Letter) => void;
}) {
  return (
    <Reveal delay={index * 0.1}>
      <motion.button
        onClick={() => onOpen(letter)}
        whileHover={{ y: -6 }}
        className="letter-container glass-card text-left rounded-2xl p-8 flex flex-col justify-between h-[340px] cursor-pointer relative group overflow-hidden w-full"
      >
        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ scale: 1.15, rotate: 8 }}
        >
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-on-secondary/20 shadow-lg shadow-secondary/20">
            <span
              className="material-symbols-outlined text-on-secondary text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {letter.icon}
            </span>
          </div>
        </motion.div>
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-md text-xs">
            Category: {letter.category}
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
            {letter.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{letter.teaser}</p>
        </div>
        <div className="mt-auto flex items-center gap-2 text-secondary font-label-md group-hover:gap-4 transition-all">
          <span>Break the seal</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </div>
      </motion.button>
    </Reveal>
  );
}
