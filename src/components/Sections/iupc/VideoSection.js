import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss"



function VideoSection(props) {
    return (
        <div className={"relative pb-20 md:pb-[15%] text-center bg-color-gray"}>
            <SectionTitle>Watch Related Videos</SectionTitle>
            <div className={"w-[90%] md:w-[70%] lg:w-[50%] mx-auto flex flex-col gap-14 mt-20"}>

                <div className={"flex flex-col md:flex-row items-center gap-10 text-center md:text-left"}>

                    <iframe height="250" src="https://www.youtube.com/embed/ueNT-w7Oluw"
                            title="What is Competitive Programming?" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col gap-4"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            What's competitive programming?
                        </h3>
                        <p className={"text-sm md:text-base  font-medium text-gray-700"}>
                            Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications.
                        </p>
                    </div>

                </div>


            </div>
            <WaveDesign color={variables.colorWhite} position={"bottom-[-2px]"}/>
        </div>
    );
}

export default VideoSection;