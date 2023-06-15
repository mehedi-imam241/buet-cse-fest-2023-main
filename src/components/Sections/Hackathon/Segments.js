"use client";

import React from 'react';

import SectionTitle from "@/components/SectionTitle";
import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

const segmentList = [
    {
        title: "DevOps",
        description: "Participants will be given a basic application and asked to build a CI/CD pipeline which might include:",
        list: [
            "Deployment,integration,testing and monitoring",
            "Make the workflow more seamless",
            "System's ability to handle different kinds of workloads"
        ]},
    {
        title: "API & Cloud Services",
        description: "Participants will leverage existing APIs and cloud services to build a solution to a given problem statement.",
        list: [
            "Include prevalent AI tasks offered by popular cloud providers",
            "Integrate social media through APIs/SDKs",
            "Architect application according to the problem statement"
        ]},
    {
        title: "Web3 & Blockchain",
        description: "Participants will implement an application requiring decentralization disintermediation and/or or transparency.",
        list: [
            "Implement a smart contract",
            "Build frontend to interact with contracts",
            "Additional tasks leveraging other web3 technologies"
        ]}
    ]

function Segments(props) {
    return (
        <div className={"text-center bg-color-gray pb-16 sm:pb-[15%] relative"}>
           <SectionTitle>Segments</SectionTitle>
            <div className={"flex flex-col xl:flex-row justify-around  mx-[4%] lg:mx-[7%] gap-10 mt-8"}>
                {
                    segmentList.map((item) => <Card>
                        <CardBody>
                            <h5 className={"mb-3 text-sm sm:text-lg font-medium text-left"}>
                                {item.title}
                            </h5>
                            <p className={"mb-2 text-left"}>
                                {item.description}

                            </p>
                            <ul className={"list-disc list-inside text-left"}>
                                {
                                    item.list.map((item,index) => <li key={index} className={"mb-1"}>{item}</li>)
                                }
                            </ul>
                        </CardBody>


                    </Card>)

                }
            </div>
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorWhite} />
        </div>
    );
}

export default Segments;