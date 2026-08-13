"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import { milestones } from "@/lib/site-config";

export default function StoryTimeline() {
  return (
    <section className="py-section-gap px-margin-mobile max-w-container-max mx-auto relative" id="story">
      <Reveal className="text-center mb-24">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">The Chapters of Us</h2>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </Reveal>

      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full milestone-line opacity-40"
        />

        <div className="space-y-24 md:space-y-32">
          {milestones.map((m, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={m.month}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <Reveal
                  direction={reversed ? "right" : "left"}
                  className={`md:w-1/2 text-center ${reversed ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"}`}
                >
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2 block">
                    {m.month}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{m.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{m.body}</p>
                </Reveal>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
                  className="relative z-10 w-12 h-12 rounded-full bg-surface-container border-2 border-secondary flex items-center justify-center gold-glow shrink-0"
                >
                  <span className="material-symbols-outlined text-secondary text-lg">{m.icon}</span>
                </motion.div>

                <Reveal
                  direction={reversed ? "left" : "right"}
                  className={`md:w-1/2 w-full ${reversed ? "md:pr-16" : "md:pl-16"}`}
                >
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className={`glass-panel p-4 rounded-xl transition-transform duration-500 ${
                      reversed ? "-rotate-2" : "rotate-2"
                    }`}
                  >
                    <div className="aspect-video bg-surface-variant rounded-lg overflow-hidden relative">
                      <Image
                        src={m.image}
                        alt={m.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
