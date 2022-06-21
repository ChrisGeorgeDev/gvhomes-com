import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function CommunityTabs() {
  return (
    <Tab.Group>
      <div className=" relative ">
        <div className="w-full flex  md:container md:mx-auto">
          <Tab.List className="grid grid-cols-2 md:flex justify-between text-center w-full md:container ">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover  border-b border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center border-b border-r border-[#010101] outline-none tabhover  py-6 font-semibold  w-full"
                  }
                >
                
                  <img className={ selected ? "max-h-[120px] lg:max-h-[186px]  mx-auto " : "max-h-[120px] lg:max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/nottinghill-logo.png"/>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center outline-none tabhover border-b md:border-r border-[#010101] py-6 font-semibold  w-full"
                  }
                >
                  <img className={ selected ? "max-h-[120px] lg:max-h-[186px]  mx-auto " : "max-h-[120px] lg:max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/aspenvillas-logo.png"/>
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
                  <img className={ selected ? "max-h-[120px] lg:max-h-[186px]  mx-auto " : "max-h-[120px] lg:max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/riverbendestates-logo.png"/>
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
                  <img className={ selected ? "max-h-[120px] lg:max-h-[186px]  mx-auto " : "max-h-[120px] lg:max-h-[186px] mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "} src="/img/watersideplace-logo.png"/>
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
      </div>
      <Tab.Panels className={`container mx-auto my-[64px] `}>
        <Tab.Panel className={``}>
          <h2 className="h2">Notting Hill</h2>

          <p className="text-xl max-w-[730px] font-light">
      <ul className="ml-6 list-outside list-disc space-y-2">
      <li>Inspired Contemporary townhome lifestyle</li>
           <li>Our newest community located in the heart of Cambridge, Ontario, consisting of 96 3-storey townhouses</li>
      </ul>
          </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
          Aspen Villas
          </h2>
          <p className="text-xl max-w-[730px] font-light">

          <ul className="ml-6 list-outside list-disc space-y-2">
      <li>Modern bungalow living</li>
      <li>Located in Oakbank, Alberta, Aspen Villas is a neighbourhood made up of 25 condominium bungalow homes.</li>
      </ul>
      </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
          Riverbend Estates
          </h2>
          <p className="text-xl max-w-[730px] font-light">

          <ul className="ml-6 list-outside list-disc space-y-2">
      <li>A collection of Thoughtfully Designed 2-Storey Bungalows. </li>
      <li>Nestled near St. Adolphe, just south of Winnipeg, Riverbend Estates comprises 25 stunning bungalows.</li>
      </ul>
</p>

        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
          Waterside Place
          </h2>
          <p className="text-xl max-w-[730px] font-light">

          <ul className="ml-6 list-outside list-disc space-y-2">
      <li>Stylish semi-detached homes </li>
<li>Located in the south east corner of Winnipeg, Waterside Place is a neighbourhood made up of 30 perfect bungalows nestled on a peaceful cul-de-sac.</li>

      </ul>
      </p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    
  );
}
