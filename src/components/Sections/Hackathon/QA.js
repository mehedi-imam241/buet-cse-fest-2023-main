import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import EventQa from "@/components/EventQA";

const QALIST = [
    {
        question: "Who can participate?",
        answer: "Any university student can apply to the hackathon."

    }, {
        question: "Will this be an onsite or online event?",
        answer: "This will be an onsite event. The venue is the ECE campus of BUET."
    }, {
        question: "Can beginners participate?",
        answer: "Definitely! Beginners are highly encouraged as\n" +
            "we will arrange workshops and have mentors\n" +
            "who are industry professionals who will help\n" +
            "participants onsite."
    }, {
    question: "Can I register for multiple segments?",
        answer: "Participants can register for multiple segments but they will only be selected to participate in a single segment for the Hackathon."
    }, {
        question: "What will happen after I register?",
        answer: "After submitting the form participants can modify the input until the final date of registration. After the registration period is over we will perform an initial screening and decide the participants for onsite Hackathon."

    }, {
        question: "What are the rules for team formation?",
        answer: "Teams consist of 2-3 participants. Each participant must be enrolled in a university at the time of registration. Participants forming a team can be of different universities."
    }, {
        question: "Which segment is suitable for me?",
        answer: "To find the most suitable segment we recommend going through our Rulebook which contains an overview and resources for each segment."
    }, {
        question: "Do I need to pay a registration fee?",
        answer: "A small registration fee will be required for the onsite participants. It can be found on the facebook event details and it will be kept affordable to encourage participation."
    }, {
        question: "What will the schedule be like?",
        answer: "The Hackathon will be a two-day event with a 24 hour long coding sprint followed by presentation and judgment."
    }, {
        question: "What do I need to bring the day of the event?",
        answer: "Participants are requested to bring laptops, chargers, multiplugs and any other necessary devices. Food, security and accommodation will be provided by us for the overnight stay."
    }, {
        question: "Can I submit an existing project to the Hackathon?",
        answer: "No. Participants will work on solving a new problem as specified by the Hackathon team on the day of the event."
    }];


function Qa(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative"}>
            <EventQa list={QALIST} />
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorGray} />
        </div>
    );
}

export default Qa;
