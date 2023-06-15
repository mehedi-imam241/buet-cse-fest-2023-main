import React from 'react';
import ButtonCustom from "@/components/ButtonCustom";
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

function JoinUs(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-white"}>
            <SectionTitle>Join us in this exciting CTF journey</SectionTitle>
            <p className={"mb-5"}/>
            <ButtonCustom textcolor={variables.colorWhite} bgcolor={`linear-gradient(to right top, ${variables.colorPrimary}, ${variables.colorSecondary}, ${variables.colorTertiary})`}>Register </ButtonCustom>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorBlack} />
        </div>
            );
            }

            export default JoinUs;