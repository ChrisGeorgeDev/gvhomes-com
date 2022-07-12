import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function ServiceTabs() {
  return (
    <Tab.Group>
      <div className=" relative ">
        <div className="w-full flex  md:container md:mx-auto">
          <Tab.List className="flex justify-between text-center w-full md:container ">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-bold"
                      : " text-black text-center border-b border-r border-[#010101] outline-none tabhover  py-6 font-bold w-full"
                  }
                >
                  <span className={ selected ? "text-7xl  mx-auto " : "text-7xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>1 </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-bold"
                      : " text-black text-center outline-none tabhover border-b border-r border-[#010101] py-6 font-bold w-full"
                  }
                >
                  <span className={ selected ? "text-7xl  mx-auto " : "text-7xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>2</span>
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-bold"
                      : " text-black text-center outline-none tabhover border-b border-r border-[#010101]  py-6 font-bold w-full"
                  }
                >
                  <span className={ selected ? "text-7xl  mx-auto " : "text-7xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>3</span>
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b  border-[#010101] outline-none py-6  text-black text-center font-bold"
                      : " text-black text-center outline-none tabhover border-b border-[#010101]  py-6 font-bold w-full"
                  }
                >
                  <span className={ selected ? "text-7xl  mx-auto " : "text-7xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>4 </span>
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
      </div>
      <Tab.Panels className={`container mx-auto my-[64px] `}>
        <Tab.Panel className={``}>
          <h2 className="h2">Real Estate Development</h2>

   
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
          	Project and Construction Management
          </h2>

 
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
       	Full-Service Build + Marketing
          </h2>

        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
     Custom Homes
          </h2>

   
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    
  );
}
