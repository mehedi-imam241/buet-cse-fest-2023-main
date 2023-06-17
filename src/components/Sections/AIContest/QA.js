import React from 'react';
import EventQa from "@/components/EventQA";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

const QALIST = [
    {
        question: "I don't know anything about aritifical intelligence or machine learning. Can I participate?",
        answer: <>YES! The only knowledge that you need to have is how to write conditionals (if-else) and loops (for, while) in any language and you're good to go!</>
    },

    {
        question: "Will there be any penalty for multiple submissions or late submissions?",
        answer: <>NO!! You will get a time period of 5 days(+) to submit, edit, re-submit your code as much as you want. The scoring will be done based on codingame's automated system, which accounts for submission time only for contestants tied to the same score. You can read about codingame rules here.</>
    },
    {
        question: "I am an absolute beginner with no experience in any contests whatsoever. Can I do any good participating here?",
        answer: <>This contest is designed so that even beginners can have fun participating. And we will be providing a skeleton sample code from where you can start.</>
    },
    {
        question: "I am not an undergrad student. Can I participate?",
        answer: <>YES! This contest is going to be open for all. Meaning everyone can participate in two ways:<br/><br/> <strong>Registered Participants</strong>:Undergrad students who have registered will be eligible for the prize money.<br/><br/> <strong> Out of Competition </strong>: Anyone not registered can directly join the game and participate. This is so that everyone gets the opportunity participate and play the game. However, they won't be eligible for the prize money.</>
    }]


function Qa(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-gray"}>
            <EventQa list={QALIST} />
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorWhite} />
        </div>
    );
}

export default Qa;