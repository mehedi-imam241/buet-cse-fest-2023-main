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

                    <iframe  height="250" src="https://www.youtube.com/embed/inWWhr5tnEA"
                            title="Cyber Security In 7 Minutes | What Is Cyber Security: How It Works? | Cyber Security | Simplilearn"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col gap-4"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            What's Cyber Security?
                        </h3>
                        <p className={"text-sm md:text-base  font-medium text-gray-700"}>
                            Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks
                        </p>
                    </div>

                </div>
                <div className={"flex flex-col md:flex-row-reverse items-center gap-10 text-center md:text-right"}>
                    <iframe  height="250" src="https://www.youtube.com/embed/8ev9ZX9J45A"
                            title="What is CTF? An introduction to security Capture The Flag competitions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col gap-4"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            Haven't heard of CTF?
                        </h3>
                        <p className={"text-sm md:text-base  font-medium text-gray-700"}>
                            CTFs are one of the best ways to get into hacking. They require a lot of work and dedication, but are highly rewarding and teach you a lot. Here is a quick introduction on how to get started with CTFs.
                        </p>
                    </div>
                </div>

            </div>
            <WaveDesign color={variables.colorWhite} position={"bottom-[-2px]"}/>
        </div>
    );
}

export default VideoSection;