"use client";

import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import variables from "@/app/variables.module.scss";
import WaveDesign from "@/components/WaveDesign";

import { Card, Typography } from "@material-tailwind/react";
import EventDescription from "@/components/eventDescription";


const description = <>BUET CSE Fest is back with another big event, the <strong>Inter University Al CONTEST</strong>. This will be an online and individual event. The contest will be based off a multiplayer game. You wil be given the game for which you have to implement some logic for your players. Your players will play the game against other players, implemented by other contestants. The matches will be displayed live!!
    <br/>
    <br/>
    You will get a time period of <strong>1 week(+) to submit, edit, re-submit your code </strong>, fighting against all the contestants torise above the leaderboard. Experience the thrill of witnessing your code fight against other contestant's code live!!
    <br/>
    <br/>
    The contest will be hosted on <strong>codingame</strong>. So participants are required to have an account in
    codingame. If you don't have an account, please open one as it takes only 1 minute and its
    completely free.
</>

const TABLE_HEAD = ["Event", "Location","Date & Time"];

const TABLE_ROWS = [
    {
        name: "Contest",
        location: "BUET",
        date: "23/04/18",
    },
    {
        name: "Prize Giving",
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