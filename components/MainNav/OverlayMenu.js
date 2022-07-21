import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "../MainNav/OverlayMenu.module.css";
import Link from "next/link";

export default function OverlayMenu({ open, setOpen, title, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-[999] overflow-hidden"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute  inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="linear duration-[7000] sm:duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 left-0 pr-0 md:pr-20 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="linear duration-[3000] sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className={`relative w-screen ${styles.halfsie}`}>
                <Transition.Child
                  as={Fragment}
                  // enter="ease-in duration-1000"
                  // enterFrom="opacity-0"
                  // enterTo="opacity-100"
                  // leave="ease-in-out duration-500"
                  // leaveFrom="opacity-100"
                  // leaveTo="opacity-0"
                >
                  <div className="absolute   z-30 closeMe top-0 right-0 mr-8 pt-4 pl-2 flex sm:-ml-10 sm:pr-4"></div>
                </Transition.Child>
                <div className="h-full flex flex-col dur bg-white shadow-xl ">
                  <div className=" relative flex-col flex-wrap  flex-1  pt-[14px] px-[24px]">
                    {/* Replace with your content */}
                    
                    <div className="grid grid-cols-1 w-full  ">
                  
           <div className="w-full text-right ">
           <button
                        className={`${styles.closeBtton} text-black hover:text-gray   focus:outline-none transform duration-200 focus:scale-110 `}
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M44.5476 14.8492L14.8491 44.5477"
                            stroke="black"
                          />
                          <path
                            d="M44.5476 44.5477L14.8491 14.8492"
                            stroke="black"
                          />
                        </svg>
                      </button>
           </div>
                  
                  
                      <Link href="/">
                        <a  onClick={() => setOpen(false)}  className=" w-full py-6 title-font  top-0 left-[0px] font-medium items-center text-gray-900 z-50 md:mb-0">
                        <svg width="29" height="33" className="h-[50px] w-auto" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.221 33H0V30.101H25.2962V19.9768L14.1126 11.3325L6.10726 17.5157L6.08681 13.8544L14.1126 7.65499L28.2251 18.5617V33H28.221ZM28.221 14.5842L14.1126 3.67748L2.92478 12.3218V24.084H18.8372V18.951L21.762 21.2134V26.979H0V10.9067L14.1126 0L28.2251 10.9067V14.5842H28.221Z" fill="black"/>
<path d="M14.1125 0V3.67748L28.221 14.5842V10.9067L14.1125 0Z" fill="black"/>
<path d="M14.1126 7.655V11.3325L25.2962 19.9768V30.101H0V33H28.221V18.5617L14.1126 7.655Z" fill="black"/>
<path d="M25.2962 19.9768L28.221 18.5617V33H0V30.101H25.2962V19.9768Z" fill="black"/>
</svg>

                        </a>
                      </Link>

               
                    </div>
                    {children}
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
