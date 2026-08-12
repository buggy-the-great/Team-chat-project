"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/letters", label: "Letters", icon: "mail" },
  { href: "/reasons", label: "Reasons", icon: "favorite" },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-3 bg-surface/90 backdrop-blur-xl border-t border-secondary/10">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center gap-1 transition-colors ${
              active ? "text-secondary" : "text-on-surface-variant"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {link.icon}
            </span>
            <span className="text-[10px] font-label-md font-bold">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
