import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import SectionTitle from "@/components/SectionTitle";
import {MdComputer} from "react-icons/md";
import variables from "@/app/variables.module.scss";
import {GiMusicalNotes, GiRallyTheTroops, GiRunningNinja} from "react-icons/gi";
import {FaBrain, FaLanguage, FaTableTennis} from "react-icons/fa";
import {AiFillLock} from "react-icons/ai";
import { IoLogoGameControllerB} from "react-icons/io";
import {IoGolf} from "react-icons/io5";
import {RiTreasureMapFill} from "react-icons/ri";
import {BsCameraFill, BsEmojiLaughingFill} from "react-icons/bs";
import {HiLightBulb} from "react-icons/hi";
import { IconContext } from "react-icons";
import {BiFootball} from "react-icons/bi";

const colorList = [variables.colorPrimary, variables.colorSecondary, variables.colorTertiary];


const EventList = [
    {
        image: <MdComputer size={32} />,
        title: "IUPC",
    },
    {
        image: <GiRunningNinja size={32} />,
        title: "Hackathon",
    },
    {
        image: <FaLanguage size={32}/>,
        title: "DL Sprint 2.0",
    },
    {
        image: <AiFillLock size={32}/>,
        title: "Capture the Flag",
    },
    {
        image: <IoLogoGameControllerB size={32}/>,
        title: "GameJam",
    },{
        image: <FaBrain size={32}/>,
        title: "AI Contest",
    },
    {
        image: <IoGolf size={32}/> ,
        title: "CodeGolf",
    },    {
        image: <RiTreasureMapFill size={32}/> ,
        title: "Treasure Hunt",
    },    {
        image: <FaTableTennis size={32}/> ,
        title: "Indoor Games",
    },
    {
image: <BiFootball size={32}/>        ,
        title: "Outdoor Games"
    },
    {
        image: <BsEmojiLaughingFill size={32}/> ,
        title: "Meme Contest",
    },
    {
        image: <HiLightBulb size={32}/> ,
        title: "Takla Contest",
    },
    {
        image: <BsCameraFill size={32}/>        ,
        title: "Photography Contest",
    },     {
        image: <GiRallyTheTroops size={32}/>        ,
        title: "Flash mob & Rally",
    },    {
        image: <GiMusicalNotes size={32}/>        ,
        title: "Grand Cultural Night",
    },];
function EventSection(props) {
    return (
        <div className="relative text-center pb-20 sm:pb-[17%]" style={{background:variables.colorGray}}>

            <SectionTitle>Events In the Fest</SectionTitle>



        <div className={"grid  grid-cols-2  md:grid-cols-3 gap-x-3 gap-y-10 mt-10 w-[95%] md:w-[80%] xl:w-[60%] mx-auto "}>
                {
                    EventList.map((item,index)=>{
                        return(
                            <div className={"flex flex-col items-center justify-center gap-2 inline-block min-w-[40px]"}>

                                    <div className={`${index%3===0? "text-color-primary":`${index%3===1?"text-color-secondary":"text-color-tertiary"}`}`}>
                                        {item.image}
                                    </div>

                                <p className={"text-xs sm:text-base font-medium text-gray-700"}>{item.title}</p>
                            </div>
                        )
                    }
                    )
                }




        </div>
            <WaveDesign position={"bottom-[0px]"} color={variables.colorWhite}/>
        </div>
    );
}

export default EventSection;