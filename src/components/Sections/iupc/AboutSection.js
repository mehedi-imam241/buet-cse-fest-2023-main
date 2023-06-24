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
            title:"27-28 July, 2023",
            description:"Contest will be held on 27-28 July, 2023 at BUET Campus"
        },
        {
            icon: <IoMapSharp size={32} color={variables.colorSecondary} />,
            title:"2 phases",
            description:<>
                <strong> Mock contest </strong>: 27 July, 2023 <br/>
                <strong> Main contest </strong>: 28 July, 2023

            </>
        },
        {
            icon: <FaGift size={32} color={variables.colorTertiary} />,
            title:"155k+ Prize Money",
            description:"Top 10 team will get prize money of total 155K BDT"
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