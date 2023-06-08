import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss"



function VideoSection(props) {
    return (
        <div className={"relative pb-20 md:pb-[15%] text-center"}>
            <SectionTitle>Watch Our Old Videos</SectionTitle>
            <div className={"w-[90%] md:w-[70%] lg:w-[50%] mx-auto flex flex-col gap-14 mt-20"}>

                <div className={"flex flex-col md:flex-row items-center gap-10 text-center md:text-left"}>

                    <iframe height={"250"} src="https://www.youtube.com/embed/YIxFWGXcWbw"
                            title="Flash Mob | BUET CSE Fest 2019" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            Flash Mob
                        </h3>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            BUET CSE Fest 2019
                        </h3>
                    </div>

                </div>
                <div className={"flex flex-col md:flex-row-reverse items-center gap-10 text-center md:text-right"}>



                    <iframe height={"250"} src="https://www.youtube.com/embed/VQa5Koy_V1w"
                            title="Flash Mob | BUET CSE Fest 2022" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>

                    <div className={"flex flex-col"}>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            Flash Mob
                        </h3>
                        <h3 className={"text-base md:text-lg font-medium text-color-black"}>
                            BUET CSE Fest 2022
                        </h3>
                    </div>
                </div>

            </div>
            <WaveDesign color={variables.colorBlack} position={"bottom-[-2px]"}/>
        </div>
    );
}

export default VideoSection;