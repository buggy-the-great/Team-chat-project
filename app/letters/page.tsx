"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import LetterCard from "@/components/LetterCard";
import LetterModal from "@/components/LetterModal";
import SiteFooter from "@/components/SiteFooter";
import { letters, type Letter } from "@/lib/site-config";

export default function LettersPage() {
  const [active, setActive] = useState<Letter | null>(null);

  return (
    <main className="relative z-10 px-margin-mobile md:px-margin-desktop pt-32 pb-section-gap max-w-container-max mx-auto">
      <Reveal className="mb-16">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
          Open When: <span className="text-secondary italic">Letters for Every Moment</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A digital collection of handwritten thoughts, curated for the highs, the lows, and the
          spaces in between. Tap an envelope to break the seal.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {letters.map((letter, i) => (
          <LetterCard key={letter.id} letter={letter} index={i} onOpen={setActive} />
        ))}
      </div>

      <LetterModal letter={active} onClose={() => setActive(null)} />

      <div className="mt-section-gap">
        <SiteFooter />
      </div>
    </main>
  );
}
