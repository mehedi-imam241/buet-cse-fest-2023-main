import React from "react";
import ButtonCustom from "../../ButtonCustom";
import variables from "../../../app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

export default function HeroSection() {
    return (
        <div className="w-full h-[100vw] md:h-[100vh] flex items-center justify-center relative bg-hackathon-pattern bg-no-repeat bg-left-bottom bg-cover">
            <WaveDesign position={"bottom-[-2px]"}/>
            <div className="text-center m-auto md:m-10 md:mt-[-25px] p-6 ">
                <h2 className="text-white text-sm md:text-2xl mb-1 sm:mb-3 font-medium">
                    BJIT Presents
                </h2>
                <h1 className="text-white text-base md:text-3xl  font-medium mb-3">
                    BUET CSE Fest 2023 Hackathon
                </h1>
                <h2 className="font-semibold text-white text-sm md:text-base mb-3 sm:mb-5">
                    20 - 21 July, 2023
                </h2>

                <div className="flex justify-center items-center gap-6">
                    <ButtonCustom bgcolor={variables.colorWhite} textcolor={variables.colorPrimary}>
                        Rules
                    </ButtonCustom>
                    <ButtonCustom bgcolor={`linear-gradient(to bottom left,${variables.colorTertiary},${variables.colorSecondary},  ${variables.colorPrimary})`} textcolor={variables.colorWhite}>
                        Register
                    </ButtonCustom>
                </div>
            </div>
        </div>
    );
}