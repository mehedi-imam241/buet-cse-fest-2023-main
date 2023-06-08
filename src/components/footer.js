import React from 'react';

function Footer(props) {
    return (
        <div className={"text-center text-color-gray bg-color-black pb-16"}>


        <div className={"flex flex-col sm:flex-row justify-evenly items-center gap-10  "}>
            <div className={"flex flex-col items-center justify-center gap-4"}>
                <h3 className={"text-base font-medium"}>Address</h3>
                <div>


                <p className={"text-sm font-light mb-2"}>Department of CSE,BUET</p>
                <p className={"text-sm font-light"}>Dhaka-1100, Bangladesh</p>
                </div>
            </div>
            <div className={"flex flex-col items-center justify-center gap-4"}>
                <h3 className={"text-base  font-medium"}>Contact Us</h3>
                <div>

                    <div className={"flex items-center gap-2 text-sm mb-2"}>


                    <p className={" font-normal  "}> Email: </p>
                        <a href={"mailto:buetcsefest2023@gmail.com"} target={"_blank"} rel="noreferrer noopener" className={"font-light hover:text-color-tertiary"}> buetcsefest2023@gmail.com</a>
                    </div>
                    <div className={"flex items-center gap-2 text-sm mb-2"}>


                        <p className={" font-normal  "}> Website: </p>
                        <a href={"https://buetcsefest2023.com"} target={"_blank"} rel="noreferrer noopener"  className={"font-light hover:text-color-tertiary"}> buetcsefest2023.com</a>

                    </div>
                    <div className={"flex items-center gap-2 text-sm mb-2"}>


                        <p className={" font-normal  "}> Facebook: </p>
                        <a href={"https://fb.me/buetcsefest2023"} target={"_blank"}  rel="noreferrer noopener" className={"font-light hover:text-color-tertiary"}> fb.me/buetcsefest2023</a>

                    </div>
                </div>
            </div>
        </div>
            <p className={"pt-16 text-xs md:text-sm font-thin"}>&copy; BUET CSE Fest 2023. All rights reserved</p>
        </div>
    );
}

export default Footer;