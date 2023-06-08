import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

const sponsors = [
    {
        name: "Optimizely",
        logo: "https://www.optimizely.com/static/assets/og_image-1200x630-2f7a7b7d6d5c8a2b6b2b2b2b2b2b2b2b.png",
        link: "https://www.optimizely.com/",
        type: "Title Sponsor"
    },
    {
        name: "google",
        logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        link: "https://www.google.com/",
        type: "Platinum Sponsor"
    },
    {
        name: "IEEE",
        logo: "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/ieee-logo.png",
        link: "https://www.ieee.org/",
        type: "Partner"
    }
    ]
function SponsorSection(props) {
    return (
        <section className={"text-center  pb-16 sm:pb-[15%] relative text-center"}>
            <SectionTitle>Sponsors & Partners</SectionTitle>
            <div className={"flex flex-col md:flex-row justify-evenly items-center mt-10 gap-5"}>
                {sponsors.map((sponsor, index) => (
                    <a href={sponsor.link} target={"_blank"} rel={"noreferrer"} key={index} className={"mx-4"}>
                        <img src={sponsor.logo} alt={sponsor.name} className={"w-32 mb-5"} />
                        <h3 className={"text-black font-medium mb-1"}>{sponsor.name}</h3>
                        <p className={"text-gray-700"}>{sponsor.type}</p>
                    </a>
                ))}
            </div>
            <WaveDesign position={"bottom-[-2px] "} color={variables.colorGray} />
        </section>
    );
}

export default SponsorSection;