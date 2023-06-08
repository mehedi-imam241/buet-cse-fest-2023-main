"use client";
import React from 'react';
import CustomCard from "@/components/CustomCard";
import SectionTitle from "@/components/SectionTitle";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

const sponsorList = [
    {
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Google",
        title: "Title Sponsor",

    },
    {
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Microsoft",
        title: "Silver Sponsor",
    },{
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Grameenphone",
        title: "Silver Sponsor",
    },{
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Grameenphone",
        title: "Silver Sponsor",
    },{
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Grameenphone",
        title: "Silver Sponsor",
    },{
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "Ekattor TV",
        title: "Media Partner",
    }, {
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fabstract-technology-particle-background_5268360.htm&psig=AOvVaw0QZ3Z2Q4Z3Q8Z2Z2Z2Z2Z2&ust=1629789852022000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
        companyName: "IEEE BUET",
        title: "Co host",
    }]
function SponsorSection(props) {
    return (
        <div className="text-center relative pb-16 sm:pb-[15%]">
            <SectionTitle>
                Our Sponsors & Partners
            </SectionTitle>

            <div className={"flex flex-col items-center mt-8"}>
                <CustomCard sponsor={sponsorList[0]}/>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
                    {sponsorList.map((sponsor, index) => {
                        if (index > 0) {
                            return <CustomCard sponsor={sponsor}/>
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