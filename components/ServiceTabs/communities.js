import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function CommunityTabs() {
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
                      ? " w-full is-active tabhover  border-b border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center border-b border-r border-[#010101] outline-none tabhover  py-6 font-semibold  w-full"
                  }
                >
                
                  <img className={ selected ? "max-h-[186px]  mx-auto " : "max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/nottinghill-logo.png"/>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center outline-none tabhover border-b border-r border-[#010101] py-6 font-semibold  w-full"
                  }
                >
                  <img className={ selected ? "max-h-[186px]  mx-auto " : "max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/aspenvillas-logo.png"/>
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center outline-none tabhover border-b border-r border-[#010101]  py-6 font-semibold  w-full"
                  }
                >
                  <img className={ selected ? "max-h-[186px]  mx-auto " : "max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/riverbendestates-logo.png"/>
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b  border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center outline-none tabhover border-b border-[#010101]  py-6 font-semibold  w-full"
                  }
                >
                  <img className={ selected ? "max-h-[186px]  mx-auto " : "max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/watersideplace-logo.png"/>
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
      </div>
      <Tab.Panels className={`container mx-auto my-[64px] `}>
        <Tab.Panel className={``}>
          <h2 className="h2">Real Estate Development</h2>

          <p className="text-xl max-w-[730px] font-light">
            Gable View Homes is a full-service real estate development firm
            specializing in new construction residential projects.
          </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
            The Second <br /> Service
          </h2>

          <p className="text-xl max-w-[730px] font-light">
            Gable View Homes is a full-service real estate development firm
            specializing in new construction residential projects.
          </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
            The Third <br /> Service
          </h2>

          <p className="text-xl max-w-[730px] font-light">
            Gable View Homes is a full-service real estate development firm
            specializing in new construction residential projects.
          </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
            The Fourth <br /> Service
          </h2>

          <p className="text-xl max-w-[730px] font-light">
            Gable View Homes is a full-service real estate development firm
            specializing in new construction residential projects.
          </p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    
  );
}
