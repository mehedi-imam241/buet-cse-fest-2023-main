"use client";

import {useEffect, useState} from "react";
import {Button, Collapse, IconButton, Navbar,} from "@material-tailwind/react";
import ButtonCustom from "@/components/ButtonCustom";
import variables from "../app/variables.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";


const navLinks = [
    {title: "Home", link: "/"},
    {title: "AI Contest", link: "/#"},
    {title: "Hackathon", link: "/hackathon"},
    {title: "DL Sprint", link: "/dlsprint2.0"},
    {title: "CTF", link: "/ctf"},
    {title: "GameJam", link: "/gamejam"},
    {title: "IUPC", link: "/iupc"},
];


export default function CustomNavbar() {
    const [openNav, setOpenNav] = useState(false);

    const pathname = usePathname();


    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-medium">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.link}
                          className={`text-base ${pathname === link.link ? "text-color-primary border-b-2 border-b-color-primary" : "text-color-black"}   hover:text-color-secondary transition-all`}>
                        {link.title}

                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <Navbar
            className="mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4 absolute left-0 right-0 z-20 "
            blurred={false}
        >
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link href="/">
                    <img src={"/assets/fest-logo-text.png"} className={"h-14 hidden sm:block"}/>
                    <img src={"/assets/fest-logo.png"} className={"w-8 block sm:hidden"}/>
                </Link>
                <div className="hidden lg:block">{navList}</div>

                <a href={"https://fb.me/buetcsefest2023"} target={"_blank"} rel={"noreferrer"} className="hidden lg:inline-block">
                    <ButtonCustom
                        bgcolor={`linear-gradient(to right top, ${variables.colorPrimary}, ${variables.colorSecondary}, ${variables.colorTertiary})`}
                        textcolor={variables.colorWhite}>Facebook Page</ButtonCustom>
                </a>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <a href={"https://fb.me/buetcsefest2023"} target={"_blank"} rel={"noreferrer"}>
                    <Button variant="gradient" color={"purple"} size="sm" fullWidth className="mb-2" >
                        <span>Facebook Page</span>
                    </Button>
                    </a>
                </div>
            </Collapse>
        </Navbar>
    );
}
