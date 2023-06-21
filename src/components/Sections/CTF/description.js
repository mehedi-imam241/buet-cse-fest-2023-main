"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>𝐁𝐔𝐄𝐓 𝐂𝐒𝐄 𝐅𝐞𝐬𝐭 is bringing you for the first time an exhilarating and intellectually stimulating Inter University Capture The Flag (CTF) Competition! This event is designed to challenge
    the brightest minds from universities across the region and provide them with an opportunity to showcase their cybersecurity skills. Whether you are a seasoned
    cybersecurity enthusiast or just starting to explore the world of ethical hacking, this competition will push your limits and ignite your passion for cybersecurity.
    <br/><br/>
    During the Inter University CTF Competition, participants will engage in a series of hands-on challenges that simulate real-world scenarios, allowing them to
    demonstrate their abilities in various areas of cybersecurity. These challenges will cover a wide range of topics, including cryptography, web security, reverse
    engineering, forensics, and more. The competition will be conducted in a team-based format(3-4 members per team), fostering collaboration and encouraging participants
    to combine their skills and knowledge to solve complex problems.
    <br/><br/>
    So, don't miss this chance to put your cybersecurity skills to the test and compete against the best minds in the region. Sharpen your hacking techniques and make
    connections that could shape your future in cybersecurity. Get ready to dive into the world of ethical hacking and show off your abilities in the Inter University
    CTF Competition!</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "Online Phase",
        location: "Online",
        date: "July 12",
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