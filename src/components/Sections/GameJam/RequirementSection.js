import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";


const requirements = [
    {
        title: "Eligibility",
        description: "The competition is open for all. That is undergraduate or graduate, anyone can participate."
    }, {
        title: "Your Team",
        description: <>A team must consist of <b>maximum 3 members</b> . It is  <strong>open for all</strong> .</>
    }]

function RequirementSection(props) {
    return (
        <section className={"text-center  pb-16 sm:pb-[15%] relative text-center"}>
            <SectionTitle>Requirements & Constraints</SectionTitle>
            <div className={"flex flex-col md:flex-row justify-evenly  mt-14 mx-[10%] md:mx-[5%] lg:mx-[10%] gap-7 xl:gap-[20%] "}>
                {requirements.map((requirement, index) => (
                    <div key={index} className={"flex-1"}>
                        <h3 className={"font-medium text-base md:text-lg text-color-black mb-3"}>
                            {requirement.title}
                        </h3>
                        <p className={"text-gray-700 "}>
                            {requirement.description}
                        </p>
                    </div>
                ))}


            </div>
            <WaveDesign position={"bottom-[-2px] "} color={variables.colorGray} />
        </section>
    );
}

export default RequirementSection;
