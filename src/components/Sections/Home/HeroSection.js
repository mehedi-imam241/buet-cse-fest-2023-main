import React from "react";
import ButtonCustom from "../../ButtonCustom";
import variables from "../../../app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

export default function HeroSection() {
  return (
    <div className="w-full h-[80vw] md:h-[95vh] flex items-center justify-center relative bg-hero-pattern bg-no-repeat bg-left-bottom bg-cover">
    <WaveDesign position={"bottom-[-2px]"}/>
      <div className="text-center m-auto md:m-10 md:mt-[-25px] p-6 ">
        <h1 className="text-white text-base md:text-3xl mb-3 font-medium">
          BUET CSE Fest 2023
        </h1>

        <h2 className="text-white text-sm md:text-base mb-5">
          Once again we are here to celebrate the biggest event of BUET CSE
        </h2>


        <ButtonCustom bgcolor={variables.colorWhite} textcolor={variables.colorPrimary}>
          Visit us on Facebook
        </ButtonCustom>
      </div>
    </div>
  );
}
