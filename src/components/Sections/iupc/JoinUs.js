import React from 'react';
import ButtonCustom from "@/components/ButtonCustom";
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

function JoinUs(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-white"}>
            <SectionTitle>Join us in this exciting IUPC journey</SectionTitle>
            <p className={"mt-4"}></p>
            <a href={"https://forms.gle/27zz6xYPKMLER6SL8"} target={"_blank"} rel={"noreferrer"} className={"mr-2"}>
            <ButtonCustom textcolor={variables.colorWhite} bgcolor={`linear-gradient(to right top, ${variables.colorPrimary}, ${variables.colorSecondary}, ${variables.colorTertiary})`}>Register </ButtonCustom>
            </a>

            <a href={"https://fb.me/e/5DB7xh0Td"} target={"_blank"} rel={"noreferrer"} className={"ml-2"}>
                <ButtonCustom textcolor={variables.colorWhite} bgcolor={`${variables.colorPrimary}`}>Facebook Event</ButtonCustom>
            </a>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorBlack} />
        </div>
            );
            }

            export default JoinUs;