import React from 'react';
import HeroSection from "@/components/Sections/Hackathon/HeroSection";
import AboutSection from "@/components/Sections/Hackathon/AboutSection";
import Description from "@/components/Sections/Hackathon/description";
import VideoSection from "@/components/Sections/Hackathon/VideoSection";
import Segments from "@/components/Sections/Hackathon/Segments";
import Qa from "@/components/Sections/Hackathon/QA";
import FurtherQueries from "@/components/Sections/Hackathon/FurtherQueries";
import JoinUs from "@/components/Sections/Hackathon/JoinUs";

function Page(props) {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <Description/>
            <VideoSection/>
            <Segments/>
            <Qa/>
            <FurtherQueries/>
            <JoinUs/>
        </div>
    );
}

export default Page;