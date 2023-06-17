import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import {MdComputer} from "react-icons/md";
import {IoMapSharp} from "react-icons/io5";
import {FaGift} from "react-icons/fa";
import AboutEvent from "@/components/aboutEvent";


function AboutSection(props) {
    const aboutList = [
        {
            icon: <MdComputer size={32} color={variables.colorPrimary} />,
            title:"20-21 July, 2023",
            description:"Attend a 24 hr long on premise hackathon at Department of CSE, BUET"
        },
        {
            icon: <IoMapSharp size={32} color={variables.colorSecondary} />,
            title:"3 Segments",
            description:"Categories to compete in DevOps, API, Web3"
        }, {
            icon: <FaGift size={32} color={variables.colorTertiary} />,
            title:"Prize Money TBA",
            description:"Separate prizes for each category, along with special prizes"
        }
    ]
    return (
        <div className={"relative bg-color-white pb-16 sm:pb-[15%] mt-8"}>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorGray} />
            <AboutEvent list={aboutList} />
        </div>
    );
}

export default AboutSection;