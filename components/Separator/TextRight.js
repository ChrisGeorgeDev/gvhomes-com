import Link from "next/link";
import React from "react";

export default function SeparatorRight(props) {
  return (
<>
<div className="flex max-h-[80vh] gap-10 flex-col lg:flex-row ">
      

<div className="flex order-2 lg:order-1 justify-end  ">
        <img className=" object-cover" src={props.image} />
      </div>


      <div className=" flex order-1 lg:order-2 flex-col justify-items-start w-4/12 ">
      <img className={`2xl:h-full hidden lg:block self-start`} src={props.svgtext} />
      <div className="ml-20 lg:hidden  lg:mr-0 text-left leading-none lg:leading-tight">
          <span className="text-4xl lg:text-8xl leading-[1.2em] text-black block font-bold"  dangerouslySetInnerHTML={{__html:props.bold} } /> 
          <span className="text-4xl lg:text-8xl leading-[1.2em] text-black uppercase  block font-thin"  dangerouslySetInnerHTML={{__html:props.thin} } /> 
      </div>
      </div>

    </div>
</>

    
  );
}






// <div className="flex max-h-[80vh] gap-10 flex-col lg:flex-row ">


// <div className="flex justify-items-end  ">
//     <img className=" object-cover self-end" src={props.image} />
//   </div>

//   <div className=" flex flex-col  w-full lg:w-7/12 2xl:w-4/12 ">
//   <img className="2xl:h-full hidden lg:block self-start  " src={props.svgtext} />
//   <div className="mr-20 lg:hidden  lg:mr-0 text-right leading-none lg:leading-tight">
//       <span className="text-4xl lg:text-8xl leading-[1.2em] text-black block font-bold"  dangerouslySetInnerHTML={{__html:props.bold} } /> 
//       <span className="text-4xl lg:text-8xl leading-[1.2em] text-black uppercase  block font-thin"  dangerouslySetInnerHTML={{__html:props.thin} } /> 
//   </div>
//   </div>


// </div>




// <>
// <div className="flex max-h-[80vh] gap-10 flex-col lg:flex-row-reverse ">
//   <div className=" flex flex-col justify-end lg:justify-start w-full lg:w-7/12 2xl:w-4/12 ">
//   <img className="2xl:h-full hidden lg:block self-end  " src={props.svgtext} />

//     <div className="mr-20 lg:hidden lg:ml-20 lg:mr-0 text-right  leading-none lg:leading-tight">
//       <span className="text-4xl lg:text-8xl leading-[1.2em]  block font-bold" dangerouslySetInnerHTML={{__html:props.bold} } />
//       <span className="text-4xl lg:text-8xl leading-[1.2em]  uppercase  block font-thin" dangerouslySetInnerHTML={{__html:props.thin} } />


//     </div>
//   </div>
//   <div className="grid justify-items-end  ">
//     <img className="self-end" src={props.image} />
//   </div>
// </div>
// </> 