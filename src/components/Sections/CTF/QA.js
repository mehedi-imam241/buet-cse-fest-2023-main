import React from 'react';
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";
import EventQa from "@/components/EventQA";

const QALIST = [
    {
        question: "Who can participate in the Inter University CTF Competition?",
        answer: "Anyone from any university currently pursuing their undergrad are eligible to participate. But the members under a team must be from same university."
    },
    {
        question: "Can I participate as an individual, or do I need to form a team?",
        answer: "The competition is team-based, and each team can have a minimum of three members and a maximum of four members. You can form your own team or join an existing one."
    },
    {
        question: "Do I need prior experience in cybersecurity to participate?",
        answer: "While prior experience in cybersecurity is beneficial, it is not a requirement. The competition is designed to accommodate participants with varying levels of expertise, from beginners to experienced hackers. It's an excellent opportunity to learn and enhance your skills regardless of your current knowledge level."
    },
    {
        question: "What skills or knowledge areas will the challenges cover?",
        answer: "The challenges will cover various areas of cybersecurity, including cryptography, web security, reverse engineering, forensics, and more. The competition aims to provide a holistic experience that encompasses different aspects of cybersecurity."

    },
    {
        question: "How long will the competition last?",
        answer: "The competition duration may vary, but typically it spans 6-7 hours. The exact duration will be communicated to participants before the event."
    },
    {
        question: "Are there any prizes for the winners?",
        answer: "Yes, there will be prizes for the top-performing teams. Details about the prizes will be shared closer to the event date."
    }
    ,
    {
        question: "How can I register for the Inter University CTF Competition?",
        answer: "Registration details, including the registration process and deadlines, will be announced and provided through official channels. Keep an eye on the event's website."
    },
    {
        question: "Is there a registration fee for participation?",
        answer: "There is no registration fee for the competition. It is completely free to participate."
    },
    {
        question: "How long will the competition last?",
        answer: "No, participation in the Inter University CTF Competition is free of charge. However, registration is mandatory, and all participants must register before the deadline."

    },
    {
        question: "Can I bring my own tools and equipment to the competition?",
        answer: "Participants are generally allowed to bring their own tools and equipment, such as laptops or other devices, as long as they comply with the competition's rules and guidelines. Specific instructions regarding allowed tools and equipment will be communicated to participants before the event."
    }

    ];

function Qa(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative "}>
            <EventQa list={QALIST} />
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorGray} />
        </div>
    );
}

export default Qa;