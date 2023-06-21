"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>Bengali is the fifth most spoken of all native languages worldwide. After completing the month-long signature Deep Learning competition on Bengali Automatic Speech Recognition (ASR) last year, we at the Department of Computer Science and Engineering, BUET now focus on another computational challenge. This year again, in partnership with Bengali.AI, we welcome participants to attend the DL Sprint 2.0 and play around with the first multi-domain large Bengali Document Layout Analysis Dataset: BaDLAD, as a part of BUET CSE Fest 2023 presented by BJIT.
On top of that, we have a prize pool of a whopping 𝟐𝟎𝟎𝐤+ 𝐁𝐃𝐓 for the winners! 𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧 𝐢𝐬 𝐨𝐩𝐞𝐧 𝐟𝐨𝐫 𝐚𝐥𝐥, 𝐧𝐨𝐭 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐮𝐧𝐝𝐞𝐫𝐠𝐫𝐚𝐝𝐮𝐚𝐭𝐞𝐬. 𝐀𝐧𝐲𝐨𝐧𝐞 𝐟𝐫𝐨𝐦 𝐚𝐧𝐲 𝐢𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐢𝐨𝐧 𝐜𝐚𝐧 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐭𝐞. So, no matter if you are a student or a professional, you have a shot at this. We also have very special prizes for BUET teams. Keep an eye on the event to know more!
So what's keeping you waiting? Let the sprint begin!
</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "First Phase",
        location: "Online",
        date: "June 18 - July 28, 2023",
    },
    {
        name: "Second Phase",
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