import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function ValuesTabs() {
  return (
    <Tab.Group>
      <div className="relative ">
        <div className="w-full flex  md:container md:mx-auto">
          <Tab.List className="flex flex-col md:flex-row justify-between text-center w-full md:container ">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full px-10 is-active tabhover border-b md:border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black px-10 text-center border-b md:border-r border-[#010101] outline-none tabhover  py-6 font-semibold  w-full"
                  }
                >
                  <span className={ selected ? "text-3xl   mx-auto " : "text-3xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>Quality </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full px-10 is-active tabhover border-b md:border-r border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black px-10 text-center outline-none tabhover border-b md:border-r border-[#010101] py-6 font-semibold  w-full"
                  }
                >
                  <span className={ selected ? "text-3xl  mx-auto " : "text-3xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>Innovation </span>
                </button>
              )}
            </Tab>

  

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " w-full px-10  is-active tabhover border-b  border-[#010101] outline-none py-6  text-black text-center font-semibold"
                      : " text-black px-10  text-center outline-none tabhover border-b border-[#010101]  py-6 font-semibold  w-full"
                  }
                >
                  <span className={ selected ? "text-3xl  mx-auto " : "text-3xl mx-auto ease-in-out duration-300 opacity-40 hover:opacity-100 "}>Care </span>
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
      </div>
      <Tab.Panels className={`container p-5  lg:px-20 mx-auto mt-[64px] `}>
        <Tab.Panel className={``}>
          <h2 className="h2">Our Standard</h2>

          <p className="text-xl max-w-[730px] font-normal">
          We’ve built our reputation on quality so you can trust your home will be thoughtfully designed, impeccably crafted, and appointed with the finest finishes. We achieve these standards by working with proven architects, talented designers, and subcontractors / tradespeople.
          </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
    	A continued evolution
          </h2>

          <p className="text-xl max-w-[730px] font-normal">
          Our commitment is to deliver your new home built with the newest standards in home-building technology and innovation.  We do this by using the latest materials and applying technological advances in the construction industry as part of our process to create homes that are seamlessly integrated into the fabric of our communities and environment.
          </p>
        </Tab.Panel>

        <Tab.Panel className={``}>
          <h2 className="h2">
  	After-sale and thereafter
          </h2>

          <p className="text-xl max-w-[730px] font-normal">
          Your new home is unique, and because of that, we treat each and every home build with individual care and attention to detail. Our experienced team of sales agents, interior designer, service coordinators and tradespeople are here to make the process of building your home as seamless and efficient as possible. We’ve worked hard to provide all of our customers with our streamlined customer journey process.
          </p>
        </Tab.Panel>

   
      </Tab.Panels>
    </Tab.Group>

    
  );
}
