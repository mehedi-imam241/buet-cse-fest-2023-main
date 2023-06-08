import React from 'react';
import HeroSection from "@/components/Sections/AIContest/HeroSection";
import AboutSection from "@/components/Sections/AIContest/AboutSection";
import Description from "@/components/Sections/AIContest/description";
import QA from "@/components/Sections/AIContest/QA";
import JoinUs from "@/components/Sections/AIContest/JoinUs";
import RequirementSection from "@/components/Sections/AIContest/RequirementSection";
import FurtherQueries from "@/components/Sections/AIContest/FurtherQueries";

function Page(props) {
    return (

            <div>
                <HeroSection />
                <AboutSection />
                <Description />
                <RequirementSection />
                <QA />
                <FurtherQueries />
                <JoinUs />
            </div>

    );
}

export default Page;