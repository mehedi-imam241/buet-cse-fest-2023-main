"use client";


import variables from "../app/variables.module.scss"

import React from "react";

export default function ButtonCustom(props) {
  return (
    <button
      style={{
        color: props.textcolor,
        background: props.bgcolor,
      }}
      className={`text-sm sm:text-base px-4 sm:px-7 py-2 sm:py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all hover:shadow-lg`}
    >
      {props.children}
    </button>
  );
}
