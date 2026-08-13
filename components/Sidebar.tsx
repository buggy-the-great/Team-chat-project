"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/#story", label: "Journey", icon: "auto_stories" },
  { href: "/letters", label: "Letters", icon: "mail" },
  { href: "/reasons", label: "Reasons", icon: "favorite" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const fireConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 80,
      startVelocity: 45,
      colors: ["#e9c349", "#ffb2bb", "#ffe088", "#ffffff"],
      origin: { x: 0.15, y: 0.85 },
    });
  };

  return (
    <aside className="hidden md:flex flex-col h-screen w-72 fixed left-0 top-0 z-[60] bg-surface-container-low/95 backdrop-blur-2xl border-r border-secondary/20 shadow-2xl py-8">
      <div className="px-8 mb-10">
        <h2 className="font-headline-sm text-headline-sm text-secondary">For My Developer</h2>
        <p className="font-label-md text-label-md text-on-surface-variant opacity-70">
          Our Love Story v1.0
        </p>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-4">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.split("#")[0]) && link.href !== "/";
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                active ? "text-secondary" : "text-on-surface-variant hover:text-secondary hover:bg-secondary/5"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-secondary/10 border-r-4 border-secondary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="material-symbols-outlined relative z-10" style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                {link.icon}
              </span>
              <span className="font-label-md text-label-md relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
