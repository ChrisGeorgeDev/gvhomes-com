import Link from "next/link";
import React from "react";

export default function H1(props) {
  return (
    <h1
      id="mainTitle"
      className={`antialiased font-sans text-left font-bold  ${props.headingStyle} md:relative text-6xl sm:text-7xl md:text-8xl  lg:text-8xl `}
    >
      Howdy
    </h1>
  );
}
