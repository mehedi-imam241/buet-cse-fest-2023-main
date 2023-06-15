import React from 'react';
import HeroSection from "@/components/Sections/CTF/HeroSection";
import AboutSection from "@/components/Sections/CTF/AboutSection";
import Description from "@/components/Sections/CTF/description";
import VideoSection from "@/components/Sections/CTF/VideoSection";


import Qa from "@/components/Sections/CTF/QA";
import FurtherQueries from "@/components/Sections/CTF/FurtherQueries";
import JoinUs from "@/components/Sections/CTF/JoinUs";
import RequirementSection from "@/components/Sections/CTF/RequirementSection";


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