"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { icon: "forum", label: "Messages Sent", value: siteConfig.messagesSent, suffix: "+" },
  { icon: "mood", label: "Laughs Shared", value: null, display: "Infinite" },
  { icon: "sex", label: "Adventures", value: siteConfig.adventures, suffix: "+" },
  { icon: "favorite", label: "Soulmate Found", value: siteConfig.soulmatesFound },
];

export default function LoveAnalytics() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <Reveal className="text-center mb-16">
          <h2 className="font-headline-md text-on-surface">Love Analytics</h2>
          <p className="text-on-surface-variant">The quantifiable side of our infinite connection.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-panel p-8 text-center rounded-2xl border-t-2 border-secondary/30 h-full"
              >
                <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">{s.icon}</span>
                <div className="text-3xl font-display-lg-mobile text-on-surface">
                  {s.value !== null ? <CountUp to={s.value} suffix={s.suffix ?? ""} /> : s.display}
                </div>
                <p className="text-on-surface-variant text-sm uppercase tracking-widest mt-2">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
