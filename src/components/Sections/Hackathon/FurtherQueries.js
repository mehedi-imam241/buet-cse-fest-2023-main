import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
function FurtherQueries(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-gray"}>
            <SectionTitle>Further Queries?</SectionTitle>
            <p className={"w-[90%] sm:w-3/4 md:w-1/2 mx-auto mt-10 text-lg font-medium"}>
                If you have any further queries, feel free to contact us at <a href="mailto:hackathon@buetcsefest2022.com" className={"text-color-secondary hover:text-color-primary"}>hackathon@buetcsefest2022.com</a>
            </p>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorWhite} />
        </div>
    );
}

export default FurtherQueries;