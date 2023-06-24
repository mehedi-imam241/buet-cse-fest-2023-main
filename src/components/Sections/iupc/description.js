"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>BUET CSE Fest is back with the most prestigious IUPC of the country – BUET Inter University Programming Contest 2023
    <br/><br/>
    There will be a main IUPC and a mock contest before that. The event will be
    onsite on the premise of BUET CSE department. A team of 3 members each
    from same university can form a team and participate in the event.
    Important event dates will be updated as time goes. For further information
    please check out the event and rulebook before registration!</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "Preregistration Start",
        location: "Online",
        date: "June 19, 2023",
    },
    {
        name: "Preregistration End",
        location: "Online",
        date: "June 28, 2023",
    },

    {
       name: "Slot Publish",
       location: "Online",
       date: "TBA"
    },
    {
        name: "Team List Publish",
        location: "Online" ,
        date: "TBA"
    },
    {
        name: "Mock Contest",
        location: "BUET",
        date:"July 27, 2023"

    },
    {
        name: "IUPC",
        location: "BUET",
        date: "July 28, 2023"
    }

]

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