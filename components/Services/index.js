import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Services() {
  return (
    <div className=" container  pt-16">
      <div className="mx-auto w-full   ">
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
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  At the time of your Home Orientation [PDI], we will provided
                  you with details on your warranty coverage.
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
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  At the time of your Home Orientation [PDI], we will provided
                  you with details on your warranty coverage.
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
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="disclosureText">
                  At the time of your Home Orientation [PDI], we will provided
                  you with details on your warranty coverage.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
