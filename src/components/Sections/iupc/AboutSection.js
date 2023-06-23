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
            title:"July 21, 2023",
            description:"Attend a 5-hour long on competition at Department of CSE, BUET"
        },
        {
            icon: <IoMapSharp size={32} color={variables.colorSecondary} />,
            title:"2 phases",
            description:<>
                <strong> Phase 1 Online </strong>: July 12 <br/>
                <strong> Phase 2 Onsite </strong>: July 21

            </>
        }, {
            icon: <FaGift size={32} color={variables.colorTertiary} />,
            title:"TBA",
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