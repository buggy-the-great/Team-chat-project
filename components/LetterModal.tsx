"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Letter } from "@/lib/site-config";

export default function LetterModal({
  letter,
  onClose,
}: {
  letter: Letter | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {letter && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-gutter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateX: -25, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative glass-card w-full max-w-xl rounded-3xl p-8 md:p-12 border-secondary/30 max-h-[85vh] overflow-y-auto custom-scrollbar"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-on-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {letter.icon}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-secondary">{letter.category}</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{letter.title}</h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="material-symbols-outlined text-on-surface-variant hover:text-secondary transition-colors"
                aria-label="Close letter"
              >
                close
              </button>
            </div>
            <div className="space-y-5 font-body-lg text-body-lg text-on-surface-variant leading-loose">
              {letter.body.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.15 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
