import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Services() {
  return (
    <div className=" lg:container  ">
      <div className="mx-auto w-full   ">
        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">1</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Sales
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  Our Sales Team is dedicated to helping you make an informed
                  decision about purchasing a Gable View home. From the first
                  point of contact to the preparation and signing of your
                  Agreement of Purchase and Sale, a sales agent will present you
                  with options such as floor plans and incentives, as well as
                  features of our new community.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">2</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Design Centre
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform  opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  Buying a new home comes with the excitement of making it your
                  own. Now is the time to start visualizing how to style your
                  home. Welcome to our Design Centre, where you’ll be working
                  with our talented Design Team to select features, finishes,
                  materials and colour palettes to reflect your personal style.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">3</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Construction
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform  opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  Your new home is unique, and because of that, we treat each
                  and every home build with individual care, attention to detail
                  and quality craftsmanship. We know you’re eager about the
                  development of your home build! We will keep you informed of
                  the construction process and invite you to visit your new home
                  during the Frame Walk, at the next step of the process.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">4</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Home Orientation (PDI)
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform  opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  After waiting and watching your home take shape over the
                  several months, your Gable View home is almost ready and we’re
                  ready to invite you to your Home Orientation (Pre-Delivery
                  Inspection). Here, you will meet your home in its finished
                  state and be introduced to its many features and systems.{" "}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">5</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Closing
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform  opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  With the move-in date of your new home approaching, it is
                  important to be properly prepared. The type of preconstruction
                  home you’ve purchased determines how to prepare for your
                  closing – whether it’s a Full Title Closing of a Freehold Home
                  or if it’s both an Full Title Closing or Occupancy closing of
                  an Common Element Home.{" "}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">6</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Key Release
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform  opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  This very important day is the day we release the keys to your
                  brand-new home. Upon confirmation from your lawyer that all
                  contract requirements and conditions have been met, we will
                  let you know that your keys are ready for pick up and schedule
                  a time for you to do so.{" "}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2 border-b border-black">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosureTitle">
                <span className="w-11 text-left">7</span>
                <span
                  className={`${
                    open ? "collapsed dTitle grow" : "dTitle grow"
                  }`}
                >
                  Warranty Coverage
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-in"
                enterFrom="transform  opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform  opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  At the time of your Home Orientation (PDI), we will provide
                  you with details on your warranty coverage. Visit{" "}
                  <a
                    href="https://www.tarion.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    www.tarion.com
                  </a>{" "}
                  for specific information, or contact customer care at{" "}
                  <a href="mailto:info@gableviewhomes.com">
                    info@gableviewhomes.com
                  </a>{" "}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
