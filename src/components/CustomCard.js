import React from 'react';
import {Card,CardBody, CardFooter, Typography} from "@material-tailwind/react";

function CustomCard(props) {
    return (
        <Card className="mt-6 w-80 p-5">
            <CardBody>
                <img src={props.sponsor.image} alt="company-logo" className="w-full mb-2"/>
                <Typography className={"font-semibold"}>
                    {props.sponsor.companyName}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">{props.sponsor.title}</CardFooter>
        </Card>
    );
}

export default CustomCard;