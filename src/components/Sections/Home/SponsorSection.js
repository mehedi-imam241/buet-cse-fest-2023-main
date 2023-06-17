"use client";
import React from 'react';
import CustomCard from "@/components/CustomCard";
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

const sponsorList = [
    {
        image: "/sponsors/BJIT.png",
        companyName: "BJIT",
        title: "Title Sponsor",

        description: "BJIT is an award-winning global IT company offering high-end IT solutions, including outsourcing, remote development, and 360-degree project management. BJIT has 750+ skilled engineers and operating in 7 global offices located in Japan, Finland, Singapore, The U.S.A, Sweden, Bangladesh and The Netherlands."

    },
    {
        image: "/sponsors/globalgeekslogo.png",
        companyName: "Global Geeks",
        title: "Co Sponsor",
    },
    {
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Therap",
        title: "Silver Sponsor",
    },{
        image: "/sponsors/daily-star.png",
        companyName: "The Daily Star",
        title: "Media Partner",
    },{
        image: "/sponsors/ekattor.png",
        companyName: "Somoy news",
        title: "TV Partner",
    },
    {
        image: "/sponsors/IEEE.png",
        companyName: "IEEE BUET CS",
        title: "Co host",
    },{
        image: "/sponsors/cyber-security.png",
        companyName: "BUET Cyber Security Club",
        title: "Co host",
    },


    ]
function SponsorSection(props) {
    return (
        <div className="text-center relative pb-16 sm:pb-[15%]">
            <SectionTitle>
                Our Sponsors & Partners
            </SectionTitle>

            <div className={"flex flex-col items-center mt-8"}>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mx-4 sm:mx-[10%] xl:mx-[15%]">
                    {sponsorList.map((sponsor, index) => {
                        if (index > 0) {
                            return <CustomCard sponsor={sponsor} />
                        }
                        else {
                            return <CustomCard sponsor={sponsorList[0]} width={"col-span-full"}/>
                        }
                    }
                    )}
                </div>
            </div>

            <WaveDesign color={variables.colorGray} position={"bottom-[-2px]"}/>
        </div>
    );
}

export default SponsorSection;