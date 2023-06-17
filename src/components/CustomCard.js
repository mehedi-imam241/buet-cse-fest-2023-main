import React from 'react';
import {Card,CardBody, CardFooter, Typography} from "@material-tailwind/react";

function CustomCard(props) {
    return (
        <Card className={` ${props.width} py-4 `}>
            <CardBody>
                <div className={"flex justify-center mb-5"}>


                <img src={props.sponsor.image} alt="company-logo" className="w-[150px]"/>
                </div>
                <Typography className={"font-semibold text-base"}>
                    {props.sponsor.companyName}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 mt-[-8px]">
                <h3 className={"font-medium"}> {props.sponsor.title} </h3>
                { props.sponsor.description && <p className={"text-sm md:text-base  text-gray-500 mt-5 "}>{props.sponsor.description}</p>}

            </CardFooter>
        </Card>
    );
}

export default CustomCard;