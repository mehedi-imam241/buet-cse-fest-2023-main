import React from 'react';
import SponsorSection from "@/components/Sections/DLSprint/sponsorSection";
import QA from "@/components/Sections/DLSprint/QA";
import JoinUs from "@/components/Sections/DLSprint/JoinUs";
import AboutSection from "@/components/Sections/DLSprint/AboutSection";
import Description from "@/components/Sections/DLSprint/description";
import HeroSection from "@/components/Sections/DLSprint/HeroSection";

function Page(props) {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <Description />
            {/*<SponsorSection />*/}
            <QA />
            <JoinUs />
        </div>
    );
}

export default Page;