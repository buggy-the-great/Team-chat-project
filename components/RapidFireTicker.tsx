import Reveal from "./Reveal";
import { rapidFireReasons } from "@/lib/site-config";

export default function RapidFireTicker() {
  const loop = [...rapidFireReasons, ...rapidFireReasons];
  return (
    <Reveal className="mt-8">
      <div className="bg-secondary/5 rounded-3xl p-10 md:p-12 overflow-hidden border border-secondary/10">
        <h4 className="font-label-md text-secondary uppercase tracking-widest mb-8">Rapid Fire Love</h4>
        <div
          className="overflow-hidden whitespace-nowrap"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className="inline-flex animate-marquee gap-12">
            {loop.map((text, i) => (
              <span
                key={i}
                className={`text-headline-sm shrink-0 ${
                  i % 2 === 0 ? "text-on-surface opacity-60" : "text-secondary"
                }`}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
