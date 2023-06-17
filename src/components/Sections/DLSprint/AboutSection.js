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
            title:"June 18-July 28, 2023",
            description:"A month long competition with both online and on premise rounds"
        },
        {
            icon: <IoMapSharp size={32} color={variables.colorSecondary} />,
            title:"2 phases",
            description:<>
                 <strong> Phase 1 </strong>: June 18 - July 28 <br/>
                 <strong> Phase 2 </strong>: TBA

            </>
        }, {
            icon: <FaGift size={32} color={variables.colorTertiary} />,
            title:"Prize Money TBA",
            description:"Participate and win from a total prize pool of TBA"
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