import React from 'react';
import SectionTitle from "@/components/SectionTitle";

function EventQa(props) {
    return (
        <>

            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 mt-16 mx-[7%] lg:mx-[10%] text-left justify-center"}>
                {
                    props.list.map((item, index) => (
                        <div key={index} className={"flex flex-col gap-2"}>
                            <h3 className={"font-medium text-base"}>{item.question}</h3>
                            <p className={"text-gray-700"}>{item.answer}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default EventQa;