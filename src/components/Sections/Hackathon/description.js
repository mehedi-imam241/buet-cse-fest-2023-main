"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>The hackathon will be a two day event organized by the <b> Department of Computer Science and Engineering, BUET </b> with a 24 hour long coding sprint followed by a presentation and judging. This will be an on site hackathon held on the premises of BUET. We
    will arrange mentors and workshops for each segment. So beginners are highly encouraged to participate. The hackathon will be held in three segments: <b> DevOps, API and Web3 </b> . We are collaborating with Optimizely to bring you this event.</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "Arrival",
        location: "BUET",
        date: "23/04/18",
    },
    {
        name: "Sprint",
        location: "BUET",
        date: "23/04/18",
    },
    {
        name: "Job Seminar",
        location: "BUET",
        date: "19/09/17",
    },
    {
        name: "Final Judging",
        location: "BUET",
        date: "23/04/18",
    }

];

function Description(props) {
    return (
        <div className={"text-center bg-color-gray pb-[15%] relative"}>
            <SectionTitle>Event Description</SectionTitle>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorWhite} />
            <EventDescription description={description} TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
        </div>
    );
}

export default Description;