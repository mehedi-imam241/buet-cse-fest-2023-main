"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>Join us for <b>BUET CSE GameJam 2023</b>! This exhilarating game development event hosted by Bangladesh University of Engineering and Technology's Department of Computer Science and Engineering brings together programmers, designers, and enthusiasts. Over 48 hours, participants will collaborate, create, and compete to develop innovative games. From experienced developers to beginners, all skill levels are welcome. Gain valuable insights from industry experts, access cutting-edge tools, and showcase your talent. The top games will be recognized by a panel of judges, offering prizes and networking opportunities. Don't miss this chance to unleash your creativity and make your mark in the gaming industry!</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "Online Phase",
        location: "Online",
        date: "July 7 - 10",
    },
    {
        name: "Onsite Phase",
        location: "BUET",
        date: "July 22",
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