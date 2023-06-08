"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>Bengali is the fifth most spoken of all native languages all over the world. But so far very little work has been done on Bengali Speech Transcription. Considering the large audience and far reaching opportunities, there's significant business and educational interest in developing Al that can be used in Bengali ASR (Automatic Speech Recognition).
    <br/>
    <br/>
    We, at the Department of Computer Science and Engineering, BUET, in partnership with
    Bengali.AI, are glad to present the very first Bengali ASR competition of its kind, DL Sprint with a newly released dataset as part of BUET CSE Fest 2022. The event is co-sponsored by Incepta Solutions, co-hosted by EBLICT Project (ICT Division) and IEEE Computer Society BUET Student Branch Chapter. In case you are not familiar with the problem, you will have human voice audio as the input and have to correctly predict the sentence that is present in the audio. We will be using a novel dataset collected and curated by Bengali Ai for Bengali Speech to Text transcription. By participating in the competition, you will accelerate Bengali ASR research and help enable the progress of Bengali language in the Al space. We have also prepared workshop sessions to get you off the mark for those of you who are beginners in this domain.
    <br/>
    <br/>
    And on top of that, we have a prize pool of whooping 200k+ BDT for the winners! The competition is also open for all. So, no matter if you are a student or a professional, you have a shot at this. We also have very special prizes for BUET teams. Keep an eye on the event to know more!
    <br/>
    <br/>
    So what are you waiting for? Let the sprint begin!
</>

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