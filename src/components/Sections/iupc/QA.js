import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import EventQa from "@/components/EventQA";

const QALIST = [
    {
        question: "Who can participate?",
        answer: "Any university student can form a team of 3 students from the same university and pre-register for the event."
    },

    {
        question: "Will this be an onsite or online event?",
        answer: "This will be an onsite event. The venue is the ECE campus of BUET."
    },
    {
        question: "What will happen after I register?",
        answer: "After pre-registration we will publish a team slot per universities. If your team is selected from your university then you can proceed to final registration."
    },
    {
        question: "What are the rules for team formation?",
        answer: "Teams consist of 3 participants. Each participant must be enrolled in the same university at the time of registration. Participants forming a team must be of the same universities. Each team must have a coach who is an active faculty of the same institution."
    },
    {
        question: "When will the final registration start?",
        answer: "The final registration will start after publishing final team list. Keep an eye on the event page or website for future updates."
    },
    {
        question: "How will the slot be given for university?",
        answer: "We will give slot based on last ICPC and last BUET IUPC performance."
    },
    {
        question: "Is there any restriction or rules to be followed on how the slots be filled up by respective university?",
        answer: "No, if a university get x amount of slots, they can choose any teams comprising of current students of that university."
    },
    {
        question: "Do I need to pay a registration fee?",
        answer: "Yes, if your team is selected for final event then you will need to pay BDT 4500 for registration."
    },
    {
        question: "What will the schedule be like?",
        answer: "There will be a Mock contest on the day before (27th July) at 3pm. Main IUPC will be held on 28th July at 9am. Event date and time may change due unavoidable issues."
    },
    {
        question: "What do I need to bring the day of the event?",
        answer: <>You will need to bring your printed template of max 25 page (if you have any). Specific rules about template will be published some day before the main IUPC</>
    }
    ]

function Qa(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative "}>
            <EventQa list={QALIST} />
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorGray} />
        </div>
    );
}

export default Qa;