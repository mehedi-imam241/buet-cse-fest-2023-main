import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import SectionTitle from "@/components/SectionTitle";

const EventList = [
    {
        image: "/assets/hero.jpg",
        title: "Event 1",
    },
    {
        image: "/assets/hero.jpg",
        title: "Event 2",
    },
    {
        image: "/assets/hero.jpg",
        title: "Event 3",
    },
    {
        image: "/assets/hero.jpg",
        title: "Event 4",
    },
    {
        image: "/assets/hero.jpg",
        title: "Event 5",
    },{
        image: "/assets/hero.jpg",
        title: "Event 6",
    },
    {
        image: "/assets/hero.jpg",
        title: "Event 7",
    }];
function EventSection(props) {
    return (
        <div className="relative text-center pb-16 sm:pb-[15%]" style={{background:variables.colorGray}}>

            <SectionTitle>Events In the Fest</SectionTitle>



        <div className={"grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-10 mt-20 sm:w-[80%] md:w-[70%] xl:w-[50%] mx-auto"}>
                {
                    EventList.map((item,index)=>{
                        return(
                            <div className={"flex items-center justify-center gap-2 rounded-sm shadow-sm inline-block"}>
                                <img src={item.image} className={"w-14 md:w-16"}/>
                                <p className={"text-base text-gray-900"}>{item.title}</p>
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