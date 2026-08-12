import Reveal from "./Reveal";
import LiveCounter from "./LiveCounter";
import { siteConfig } from "@/lib/site-config";

export default function JourneyCounter() {
  return (
    <section className="py-24 bg-surface-container-lowest/50 border-y border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile text-center">
        <Reveal>
          <h2 className="font-label-md text-secondary tracking-widest uppercase mb-8">
            Our Journey Together
          </h2>
        </Reveal>
        <LiveCounter since={siteConfig.sinceDate} />
        <Reveal delay={0.2}>
          <p className="mt-12 text-on-surface-variant/60 italic">
            ...and counting every single heartbeat since we met.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
