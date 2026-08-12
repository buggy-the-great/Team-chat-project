import Reveal from "@/components/Reveal";
import ReasonsHero from "@/components/ReasonsHero";
import RapidFireTicker from "@/components/RapidFireTicker";
import ReasonsList from "@/components/ReasonsList";
import SiteFooter from "@/components/SiteFooter";

export default function ReasonsPage() {
  return (
    <main className="relative z-10 px-margin-mobile md:px-margin-desktop pt-32 pb-section-gap max-w-container-max mx-auto">
      <Reveal className="text-center mb-section-gap space-y-4">
        <span className="inline-block px-4 py-1 rounded-full border border-secondary/30 text-secondary font-label-md text-label-md tracking-widest uppercase bg-secondary/5">
          The Ultimate Collection
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
          100 Reasons: <br />
          <span className="text-secondary italic">A Lifetime of Why</span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-body-lg font-body-lg">
          A curated gallery of moments, quirks, and profound truths that define why you are the
          anchor to my world.
        </p>
      </Reveal>

      <ReasonsHero />
      <RapidFireTicker />
      <ReasonsList />

      <div className="mt-section-gap">
        <SiteFooter />
      </div>
    </main>
  );
}
