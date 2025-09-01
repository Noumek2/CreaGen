import { Hero } from "@/components/Hero";
import { CreativeDomains } from "@/components/CreativeDomains";
import { FeaturedCreations } from "@/components/FeaturedCreations";
import { CommunityStats } from "@/components/CommunityStats";
import AttendanceChart from "@/components/AttendanceChart";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CreativeDomains />
      <FeaturedCreations />
      <CommunityStats />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <AttendanceChart />
        </div>
      </div>
    </div>
  );
};

export default Index;