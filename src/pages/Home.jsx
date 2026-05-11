import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import FounderStory from "../components/FounderStory";
import ArticlesSection from "../components/ArticlesSection";
import ProjectShowcase from "../components/ProjectShowcase";
import CommunitySection from "../components/CommunitySection";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import { useSEO } from "../utils/seo";

export default function Home() {
  useSEO({
    title: "Fishing & Outdoor Club — Premium Outdoor Adventure Magazine",
    description: "Cinematic outdoor lifestyle magazine: fishing guides, camping tips, hiking trails, survival skills, lake adventures, and gear reviews.",
  });
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FounderStory />
      <ArticlesSection compact />
      <ProjectShowcase />
      <CommunitySection />
      <Newsletter />
      <FAQ />
    </main>
  );
}
