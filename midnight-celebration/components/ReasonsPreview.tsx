"use client";

import { useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { reasons } from "@/lib/site-config";

export default function ReasonsPreview() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <Reveal className="text-center mb-16">
          <h2 className="font-headline-md text-on-surface">100 Reasons Why</h2>
          <p className="text-on-surface-variant">Just a glimpse into why you&apos;re my everything.</p>
        </Reveal>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar snap-x snap-mandatory"
          >
            {reasons.slice(0, 8).map((r) => (
              <div
                key={r.n}
                className="flex-none w-64 md:w-80 h-48 glass-panel p-8 rounded-2xl flex items-center justify-center text-center snap-center border-b-4 border-secondary/40"
              >
                <p className="text-on-surface italic">&quot;{r.title}&quot;</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll(-1)}
              className="p-3 rounded-full border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-3 rounded-full border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="text-center mt-4">
            <Link
              href="/reasons"
              className="text-secondary font-label-md tracking-widest uppercase hover:underline"
            >
              See all 100 reasons →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
