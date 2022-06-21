import Link from "next/link";
import React from "react";

export default function SeparatorLeft(props) {
  return (
    <section>
    <div className="lg:py-[125px] ">
      <div className="flex flex-col lg:flex-row ">
        <div className=" flex flex-col lg:text-upright justify-end w-7/12 2xl:w-4/12 ">
          <div className="ml-10 lg:ml-20 leading-none lg:leading-tight">
            <span className="text-4xl lg:text-8xl leading-[1.2em] block font-bold"  dangerouslySetInnerHTML={{__html:props.bold} }/>
            <span className="lg:text-8xl text-4xl leading-[1.2em] uppercase  block font-thin" dangerouslySetInnerHTML={{__html:props.thin} }/>
          </div>
        </div>
        <div className="flex justify-items-end  ">
          <img className="self-end" src={props.image} />
        </div>
      </div>
    </div>
  </section>
    
  );
}



