import { Hero } from "@/components/Hero";
import { CreativeDomains } from "@/components/CreativeDomains";
import { FeaturedCreations } from "@/components/FeaturedCreations";
import { CommunityStats } from "@/components/CommunityStats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CreativeDomains />
      <FeaturedCreations />
      <CommunityStats />
    </div>
  );
};

export default Index;