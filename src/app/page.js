import HeroSection from "@/components/Sections/Home/HeroSection";
import SponsorSection from "@/components/Sections/Home/SponsorSection";
import EventSection from "@/components/Sections/Home/EventSection";
import CompetitionSection from "@/components/Sections/Home/CompetitionSection";
import FamilySection from "@/components/Sections/Home/FamilySection";
import VideoSection from "@/components/Sections/Home/VideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
        <SponsorSection/>
        <EventSection/>
      <FamilySection/>
        <CompetitionSection/>
        <VideoSection/>

    </div>

  );
}
