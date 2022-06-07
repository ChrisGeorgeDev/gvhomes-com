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
                      ? " w-full is-active tabhover border-b border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black text-center border-b border-r border-[#010101] outline-none tabhover  py-6 font-semibold  w-full"
                  }
                >
                  <span className="text-7xl">1 </span>
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
                  <span className="text-7xl">2 </span>
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
                  <span className="text-7xl">3 </span>
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
                  <span className="text-7xl">4 </span>
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
