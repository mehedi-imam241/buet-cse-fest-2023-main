import React from 'react';
import HeroSection from "@/components/Sections/iupc/HeroSection";
import AboutSection from "@/components/Sections/iupc/AboutSection";
import Description from "@/components/Sections/iupc/description";
import VideoSection from "@/components/Sections/iupc/VideoSection";


import Qa from "@/components/Sections/iupc/QA";
import FurtherQueries from "@/components/Sections/iupc/FurtherQueries";
import JoinUs from "@/components/Sections/iupc/JoinUs";
import RequirementSection from "@/components/Sections/iupc/RequirementSection";


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