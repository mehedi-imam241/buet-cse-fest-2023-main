import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import {MdComputer} from "react-icons/md";
import {IoMapSharp} from "react-icons/io5";
import {FaGift, FaLanguage} from "react-icons/fa";
import AboutEvent from "@/components/aboutEvent";


function AboutSection(props) {
    const aboutList = [
        {
            icon: <MdComputer size={32} color={variables.colorPrimary} />,
            title:"July 2-July 6, 2023",
            description:"A 5 days long online individual AI competition. The contest will be in multiplayer mode."
        },
        {
            icon: <FaLanguage size={32} color={variables.colorSecondary} />,
            title:"Languages",
            description:<>
                 Any Language starting from C/C++, Python, Java, Javascript, Kotlin, Bash, PHP, Ruby, C#

            </>
        }, {
            icon: <FaGift size={32} color={variables.colorTertiary} />,
            title:"30K+ Prize Money",
            description:"Participate and win from a total prize pool of 30000+ BDT"
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