import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import EventQa from "@/components/EventQA";

const QALIST = [

    ];

function Qa(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative "}>
            <EventQa list={QALIST} />
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorGray} />
        </div>
    );
}

export default Qa;