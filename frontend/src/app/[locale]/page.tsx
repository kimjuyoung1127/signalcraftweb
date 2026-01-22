import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
import { WhyBentoGrid } from "@/features/why-us/WhyBentoGrid";
import { GuideSection } from "@/features/guide/GuideSection";
import { CaseStories } from "@/features/case-studies/CaseStories";
import { NewsSection } from "@/features/news/NewsSection";
import { ContactSection } from "@/features/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <WhyBentoGrid />
      <GuideSection />
      <CaseStories />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
