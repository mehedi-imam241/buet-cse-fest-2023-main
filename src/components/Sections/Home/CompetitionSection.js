import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss"
import ButtonCustom from "@/components/ButtonCustom";

const CompetitionList = [
    {
        title: "Hackathon",
        description: "An inter university 24-hour competition where participants will be given a problem to solve using the development skills they have.",
        image: "/assets/hackthon-banner.jpg"
    },
    {
        title: "Deep Learning Sprint 2.0",
        description: "A month long deep learning competition where participants will be given a problem and a dataset and the competition will be held in Kaggle.",
        image: "/assets/dlsprint-banner.jpg"
    },
    {
        title: "Capture the Flag",
        description: "Capture The Flag (CTF) is a thrilling cybersecurity contest where participants use their computer skills to find and exploit weaknesses in systems, competing to capture virtual flags and earn points.",
        image: "/assets/ctf-banner.png"
    },
    {
        title: "GameJam",
        description: "A Gamejam competition is an event where participants, typically game developers or enthusiasts, come together to create playable games within a set timeframe of 72 hours.",
        image: "/assets/gamejam-banner.jpg"
    },
    {
        title: "AI Contest",
        description: "A simple strategy game where you have to build a bot to play against other bots. The bot with the highest score wins the game.",
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