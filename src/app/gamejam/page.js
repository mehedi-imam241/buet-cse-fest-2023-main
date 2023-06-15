import React from 'react';
import HeroSection from "@/components/Sections/GameJam/HeroSection";
import AboutSection from "@/components/Sections/GameJam/AboutSection";
import Description from "@/components/Sections/GameJam/description";
import VideoSection from "@/components/Sections/GameJam/VideoSection";
import Qa from "@/components/Sections/GameJam/QA";
import FurtherQueries from "@/components/Sections/GameJam/FurtherQueries";
import JoinUs from "@/components/Sections/GameJam/JoinUs";
import RequirementSection from "@/components/Sections/GameJam/RequirementSection";


function Page(props) {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <Description/>
            <RequirementSection/>
            <VideoSection/>
            <Qa/>
            <FurtherQueries/>
            <JoinUs/>
        </div>
    );
}

export default Page;