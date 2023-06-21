import SectionTitle from "@/components/SectionTitle";
import ButtonCustom from "@/components/ButtonCustom";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";
import React from "react";

export default function JoinUs(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-gray"}>
            <SectionTitle>What are you waiting for?</SectionTitle>
            <p className={"mb-5"}/>
            <a href={"https://shorturl.at/ghty4"} target={"_blank"} rel={"noreferrer"}>
            <ButtonCustom textcolor={variables.colorWhite} bgcolor={`linear-gradient(to right top, ${variables.colorPrimary}, ${variables.colorSecondary}, ${variables.colorTertiary})`}>Register </ButtonCustom>
            </a>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorBlack} />
        </div>
    );
}