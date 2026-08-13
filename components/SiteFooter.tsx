import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="py-12 border-t border-white/5 text-center bg-gradient-to-t from-surface-container-lowest to-transparent">
      <div className="font-display-lg-mobile text-headline-sm text-secondary italic mb-4">
        {siteConfig.siteName}
      </div>
      <p className="text-on-surface-variant/50 text-sm mb-2">Created with love for you.</p>
      <p className="text-on-surface-variant/30 text-[10px] uppercase tracking-tighter">
        By Tanu
      </p>
    </footer>
  );
}
