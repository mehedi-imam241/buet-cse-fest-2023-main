import React from 'react';
import {Card, Typography} from "@material-tailwind/react";

function EventDescription({description, TABLE_HEAD, TABLE_ROWS}) {
    return (
        <>
            <p className={"w-3/4 lg:w-1/2 mx-auto mt-5 text-gray-700 inline-block mb-10 text-sm sm:text-base whitespace-pre-wrap"}>
                {description}
            </p>

            <div className={"flex justify-center items-center "}>


                <Card className="overflow-auto h-full w-5/6  lg:w-1/3 ">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-color-primary p-4">
                                    <Typography
                                        variant="small"
                                        color={"white"}
                                        className="font-normal leading-none "
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {TABLE_ROWS.map(({ name, location, date }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {location}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {date}
                                    </Typography>
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card>

            </div>

        </>
    );
}

export default EventDescription;