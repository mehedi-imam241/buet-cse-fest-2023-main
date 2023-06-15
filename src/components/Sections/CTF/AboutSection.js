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
            title:"June 4-5, 2023",
            description:"Attend a 24 hr long on premise hackathon at Department of CSE, BUET"
        },
        {
            icon: <IoMapSharp size={32} color={variables.colorSecondary} />,
            title:"2 phases",
            description:<>
                <strong> Phase 1 </strong>: July 01- Aug 25 <br/>
                <strong> Phase 2 </strong>: Sept 02

            </>
        }, {
            icon: <FaGift size={32} color={variables.colorTertiary} />,
            title:"250K+ Prize Money",
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