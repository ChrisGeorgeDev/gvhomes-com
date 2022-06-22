import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import styles from "../MainNav/OverlayMenu.module.css"

export default function OverlayMenu({ open, setOpen, title, children }) {

  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      static
      className="fixed inset-0 z-50 overflow-hidden"
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
                <div className="absolute   z-30 closeMe top-0 right-0 mr-8 pt-4 pl-2 flex sm:-ml-10 sm:pr-4">
                  <button
                    className={`${styles.closeButton} text-black hover:text-gray absolute top-[11px] right-[-9px] focus:outline-none transform duration-200 focus:scale-110 `}
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    {/* <XIcon className=" text-orange h-16 w-16" aria-hidden="true" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#000">
  <path fillRule="evenodd" fill='#000' d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
       
                  </button>
                </div>
              </Transition.Child>
              <div className="h-full flex flex-col dur bg-white shadow-xl overflow-y-auto">
           
                <div className=" relative  items-center flex-1  pt-[14px] px-[24px]">
                  {/* Replace with your content */}
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
  )
}
