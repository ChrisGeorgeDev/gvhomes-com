import Link from "next/link";
import React from "react";

export default function SeparatorRight(props) {
  return (
    <section>
  <div className="py-[75px] lg:py-[125px] ">
      <div className="flex flex-col lg:flex-row-reverse ">
        <div className=" flex flex-col lg:text-upright justify-end lg:justify-start w-full lg:w-7/12 2xl:w-4/12 ">
          <div className="mr-20 lg:ml-20 lg:mr-0 text-right lg:text-left leading-none lg:leading-tight">
            <span className="text-4xl lg:text-8xl leading-[1.2em]  block font-bold">{props.bold}</span>
            <span className="text-4xl lg:text-8xl leading-[1.2em]  uppercase  block font-thin">
           {props.thin}
            </span>
      
          </div>
        </div>
        <div className="grid justify-items-end  ">
          <img className="self-end" src={props.image} />
        </div>
      </div>
    </div>
    </section> 
    
  );
}


