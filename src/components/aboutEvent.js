import React from 'react';

function AboutEvent(props) {
    return (
        <div className="flex flex-col md:flex-row justify-around  mx-[4%] lg:mx-[7%] gap-10">
            {
                props.list.map((item)=> <div className={"flex flex-col flex-1 text-center  items-center  gap-4"}>
                        {item.icon}
                        <div className={"flex flex-col gap-2"}>
                            <h3 className={"font-medium text-base"}>{item.title}</h3>
                            <p className={"text-gray-700"}>{item.description}</p>
                        </div>
                    </div>

                )
            }
        </div>
    );
}

// const type Props = {
//
// }

export default AboutEvent;