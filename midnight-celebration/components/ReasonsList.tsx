"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { reasons as baseReasons } from "@/lib/site-config";

const STORAGE_KEY = "midnight-celebration:custom-reasons";

export default function ReasonsList() {
  const [customReasons, setCustomReasons] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCustomReasons(JSON.parse(stored));
    } catch {
      // ignore corrupted storage
    }
  }, []);

  const addReason = () => {
    if (!draft.trim()) return;
    const updated = [...customReasons, draft.trim()];
    setCustomReasons(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setDraft("");
    setModalOpen(false);
  };

  const remaining = Math.max(0, 100 - baseReasons.length - customReasons.length);

  return (
    <div className="mt-section-gap glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto relative">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-16">
          <Reveal direction="left">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">The Complete List</h2>
              <p className="text-on-surface-variant">Scroll through the eternal why.</p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 rounded-full bg-secondary text-on-secondary font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-secondary/30 transition-shadow"
            >
              <span className="material-symbols-outlined">add</span> Add Your Own
            </motion.button>
          </Reveal>
        </div>

        <div className="space-y-10 custom-scrollbar max-h-[700px] overflow-y-auto pr-4">
          {baseReasons.map((r) => (
            <Reveal key={r.n} delay={0}>
              <div className="group border-b border-secondary/10 pb-8 transition-colors hover:border-secondary/40">
                <span className="font-label-md text-secondary">Reason #{r.n}</span>
                <h3 className="font-headline-sm text-headline-sm mt-2 text-on-surface group-hover:translate-x-2 transition-transform">
                  {r.title}
                </h3>
                <p className="text-on-surface-variant/70 mt-2">{r.body}</p>
              </div>
            </Reveal>
          ))}

          {customReasons.map((text, i) => (
            <div key={i} className="group border-b border-secondary/10 pb-8 transition-colors hover:border-secondary/40">
              <span className="font-label-md text-secondary">
                Reason #{baseReasons.length + i + 1} · Added by you
              </span>
              <h3 className="font-headline-sm text-headline-sm mt-2 text-on-surface group-hover:translate-x-2 transition-transform">
                {text}
              </h3>
            </div>
          ))}

          {remaining > 0 && (
            <div className="text-center py-8">
              <span className="text-on-surface-variant italic">
                ...and {remaining} more reasons held in our hearts.
              </span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-gutter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative glass-card w-full max-w-lg rounded-3xl p-8 border-secondary/30"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Add A Reason</h3>
                <button
                  className="material-symbols-outlined text-on-surface-variant hover:text-secondary"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  close
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-label-md text-secondary text-xs uppercase mb-2">
                    The Reason
                  </label>
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    className="w-full bg-surface-container border-b-2 border-secondary/20 focus:border-secondary focus:ring-0 text-on-surface rounded-t-xl min-h-[120px] p-4 transition-all outline-none"
                    placeholder="Tell me something beautiful..."
                  />
                </div>
                <button
                  onClick={addReason}
                  className="w-full py-4 rounded-full bg-secondary text-on-secondary font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-secondary/10"
                >
                  Add to the Lifetime List
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
