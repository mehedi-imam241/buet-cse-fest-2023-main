import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import ButtonCustom from "@/components/ButtonCustom";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

function FamilySection(props) {
    return (
        <div className={"relative bg-color-white"}>
            <div className={"flex flex-row items-center justify-center gap-6 pb-24 sm:pb-[15%] text-center"}>
                <div className={"flex flex-col items-center justify-center gap-5 mt-[-3%]"}>

                    <img src={"/assets/people.jpg"} alt={"family image"} className={"w-3/4 md:w-1/2"}/>
                    <SectionTitle>Are you from BUET CSE Family?</SectionTitle>
                    <a href={"https://www.facebook.com/groups/598736418905989/"} target={"_blank"} rel={"noreferrer"}>


                    <ButtonCustom  textcolor={variables.colorWhite}  bgcolor={`linear-gradient(to right top, ${variables.colorPrimary}, ${variables.colorSecondary}, ${variables.colorTertiary})`} >Join Our Facebook Group</ButtonCustom>
                    </a>

                    </div>
            </div>
            <WaveDesign position={"bottom-0"} color={variables.colorGray}/>
        </div>
    );
}

export default FamilySection;