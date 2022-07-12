import { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
export default function ResourceTab(props) {
  let data = props.com.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj.category).indexOf(obj.category) == pos;
  });
  console.log(data);
  return (
    <div className="w-full  px-2 py-16 sm:px-0  m-auto">
      {/* {props.com
        .filter((element) => element.category == "category_one")
        .map((x) => console.log(x))} */}
      <Tab.Group defaultIndex={0}>

   <div className=" relative border-[#010101]  border-b mb-6 ">
        <div className="w-full flex  md:container md:mx-auto">
          <Tab.List className="flex relative resources top-[1px]  text-left w-full md:container ">
          {data.map((x) => (
            <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? " is-active tabhover restabs border-b border-r border-[#010101] outline-none py-6 px-5  text-black text-left font-semibold"
                    : " text-black text-left restabs border-b border-r border-[#010101] outline-none tabhover px-5   py-6 font-semibold "
                }
              >
                <span className={ selected ? "text-base font-  mx-auto " : "text-base mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>   {x.category} </span>
              </button>
            )}
           
            </Tab>
          ))}
        </Tab.List>
        </div>
      </div>
        <Tab.Panels>
          {data.map((x) => (
            <Tab.Panel key={x.id}>
              <ul className="">
                {props.com
                  .filter((element) => element.category == x.category)
                  .map((x) => (

                    <div className="py-10 container gap-5 flex w-full border-b">
                    <div className="">
                      <svg
                        width="60"
                        height="59"
                        viewBox="0 0 60 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M59 50.7411L59 50.6221M59 50.6221L59 1L1 0.999997L1 50.7411L29.7642 58L59 50.6221Z"
                          stroke="black"
                        />
                        <path d="M18 43H42.5" stroke="black" />
                        <path
                          d="M29.6464 33.3536C29.8417 33.5488 30.1583 33.5488 30.3536 33.3536L33.5355 30.1716C33.7308 29.9763 33.7308 29.6597 33.5355 29.4645C33.3403 29.2692 33.0237 29.2692 32.8284 29.4645L30 32.2929L27.1716 29.4645C26.9763 29.2692 26.6597 29.2692 26.4645 29.4645C26.2692 29.6597 26.2692 29.9763 26.4645 30.1716L29.6464 33.3536ZM29.5 10L29.5 33L30.5 33L30.5 10L29.5 10Z"
                          fill="black"
                        />
                      </svg>
                    </div>
        
                    <div className="grow flex gap-2 flex-col">
                      <span className="uppercase montserrat font-normal">DOCUMENT</span>
                      <a href="">
                        <span className="text-xl hover:text-red-600 font-bold">
                        {x.title}
                        </span>
                      </a>
                      <span className="uppercase montserrat font-normal">PDF {x.download.data.attributes.size} </span>
                    </div>
        
                    <div className="flex-col flex justify-between">
                      <span className=" uppercase montserrat font-normal">
                        PUBLISHED
                      </span>
                      <span className=" uppercase montserrat font-normal">
                      {x.download.data.attributes.updatedAt} 
                      </span>
                    </div>
                  </div>


              
                  ))}
              </ul>



            </Tab.Panel>
          ))}
        </Tab.Panels>
     
      </Tab.Group>
    </div>
  );
}

// <li key={x.id} className="sizing">
// <a href={x.resource[0].download.data.attributes.url} target="_blank">
// {x.resource[0].title}
// </a>
//    </li>


