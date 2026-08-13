"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ConfettiButton from "./ConfettiButton";
import { siteConfig } from "@/lib/site-config";

export default function WishesSection() {
  return (
    <section className="py-section-gap relative" id="wishes">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto px-margin-mobile text-center relative z-10">
        <Reveal>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-12 inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 border border-secondary/20"
          >
            <span
              className="material-symbols-outlined text-secondary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-8 italic">
            {siteConfig.wishTitle}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12">
            {siteConfig.wishParagraphs.map((p, i) => (
              <p
                key={i}
                className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6 last:mb-0"
              >
                {p}
              </p>
            ))}
            <p className="mt-8 font-headline-sm text-headline-sm text-secondary">{siteConfig.wishSignature}</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <ConfettiButton className="px-10 py-5 bg-secondary text-on-secondary rounded-full font-label-md text-label-md tracking-widest uppercase gold-glow">
            Celebrate Our Love
          </ConfettiButton>
        </Reveal>
      </div>
    </section>
  );
}
