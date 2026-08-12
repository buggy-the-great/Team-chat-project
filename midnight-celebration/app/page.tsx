import Hero from "@/components/Hero";
import JourneyCounter from "@/components/JourneyCounter";
import StoryTimeline from "@/components/StoryTimeline";
import LittleThings from "@/components/LittleThings";
import LoveAnalytics from "@/components/LoveAnalytics";
import ReasonsPreview from "@/components/ReasonsPreview";
import WishesSection from "@/components/WishesSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <JourneyCounter />
      <StoryTimeline />
      <LittleThings />
      <LoveAnalytics />
      <ReasonsPreview />
      <WishesSection />
      <SiteFooter />
    </main>
  );
}
