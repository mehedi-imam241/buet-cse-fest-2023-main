"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>The Fest is back with its signature event - A 24-hour long Hackathon! 🎉
    <br/>
    <br/>
    The Hackathon will be a two-day event involving a 24-hour long coding sprint followed by presentation and judging. This will be an onsite hackathon held on the premises of BUET. Mentors and workshops for each segment will be arranged, so beginners are highly encouraged to participate. Teams consist of 2-3 participants and participants need to be university students. The segments for this year's Hackathon are - DevOps, API and Web3. For further information please checkout the event and rulebook before registration!
    <br/>
    <br/>
    The event will be held in the premises of ECE building, BUET.</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "Arrival",
        location: "BUET",
        date: "13 July, 2023. 8:00 AM",
    },
    {
        name: "Sprint",
        location: "BUET",
        date: "13 - 14 July, 2023",
    },
    {
        name: "Job Seminar",
        location: "BUET",
        date: "14 July, 2023",
    },
    {
        name: "Prize Giving Ceremony",
        location: "BUET",
        date: "TBA",
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