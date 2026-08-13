"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { littleThingsHeDid, thingsWeAre } from "@/lib/site-config";

function ListBlock({
  icon,
  title,
  items,
  direction,
}: {
  icon: string;
  title: string;
  items: { title: string; body: string }[];
  direction: "left" | "right";
}) {
  return (
    <Reveal direction={direction}>
      <h3 className="font-headline-sm text-secondary mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-6">
        {items.map((item) => (
          <motion.li
            key={item.title}
            whileHover={{ x: 8 }}
            className="flex gap-4 items-start group cursor-default"
          >
            <div className="mt-1 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
            <div>
              <h4 className="font-bold text-on-surface">{item.title}</h4>
              <p className="text-on-surface-variant/70">{item.body}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function LittleThings() {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile grid md:grid-cols-2 gap-16">
        <ListBlock icon="auto_fix_high" title="Little Things He Did" items={littleThingsHeDid} direction="left" />
        <ListBlock icon="all_inclusive" title="Things We Are" items={thingsWeAre} direction="right" />
      </div>
    </section>
  );
}
