import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss"



function VideoSection(props) {
    return (
        <div className={"relative pb-20 md:pb-[15%] text-center"}>
            <SectionTitle>Watch Related Videos</SectionTitle>
            <div className={"w-[90%] md:w-[70%] lg:w-[50%] mx-auto flex flex-col gap-14 mt-20"}>

                <div className={"flex flex-col md:flex-row items-center gap-10 text-center md:text-left"}>

                    <iframe  height="250" src="https://www.youtube.com/embed/FExp9YuTzbY"
                            title="What is Web3?" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col gap-4"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            Haven't heard of Web3?
                        </h3>
                        <p className={"text-sm md:text-base  font-medium text-gray-700"}>
                            Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies and token-based economics.
                        </p>
                    </div>

                </div>
                <div className={"flex flex-col md:flex-row-reverse items-center gap-10 text-center md:text-right"}>
                    <iframe  height="250" src="https://www.youtube.com/embed/kBV8gPVZNEE"
                            title="What is DevOps?" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col gap-4"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            What's DevOps?
                        </h3>
                        <p className={"text-sm md:text-base  font-medium text-gray-700"}>
                            DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams.
                        </p>
                    </div>
                </div>

            </div>
            <WaveDesign color={variables.colorGray} position={"bottom-[-2px]"}/>
        </div>
    );
}

export default VideoSection;