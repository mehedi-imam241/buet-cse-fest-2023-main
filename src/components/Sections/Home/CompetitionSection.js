import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss"
import ButtonCustom from "@/components/ButtonCustom";

const CompetitionList = [
    {
        title: "hackathon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies",
        image: "/assets/hackthon-banner.jpg"
    },
    {
        title: "Deep Learning Sprint",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies nisl nunc aliquam nisl nunc aliquam",
        image: "/assets/dlsprint-banner.jpg"
    },
    {
        title: "Capture the Flag",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies",
        image: "/assets/ctf-banner.jpg"
    },
    {
        title: "GameJam",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies",
        image: "/assets/gamejam-banner.jpg"
    },
    {
        title: "AI Contest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo ac ultrices ultricies",
        image: "/assets/ai-contest-hero.webp"
    }

];

function CompetitionSection(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-gray"}>
            <SectionTitle>Team Competitions For All</SectionTitle>
            <div
                className={"flex flex-col  items-center justify-center gap-16 mt-20 w-[90%] md:w-[75%] xl:w-[50%] mx-auto"}>
                {
                    CompetitionList.map((item, index) => <div
                        className={`flex flex-col ${index%2===0? "md:flex-row md:text-left": "md:flex-row-reverse md:text-right"} items-center justify-center gap-6`}>
                        <img src={item.image} className={"w-[90%] md:w-1/2"}/>
                        <div className={`flex flex-col w-full sm:w-1/2 gap-2`}>
                            <h3 className={"text-xl text-gray-900"}>{item.title}</h3>
                            <p className={"text-base text-gray-700"}>{item.description}</p>
                        </div>

                    </div>)
                }
            </div>

            <WaveDesign position={"bottom-0"} color={variables.colorWhite}/>
        </div>
    );
}

export default CompetitionSection;