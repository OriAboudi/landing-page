import React from 'react'
import { useRef } from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'




function TimeLine({ setYear, arr, arrSelect }) { // Get props from Home.jsx
  const ref_select = useRef();
  
  return (
    <div>
      
        {/* top year data */}
      <div className="flex justify-between mt-4">
        <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
      
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <p  className="ml-[70px] md:ml-[10px]">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white underline">Top Year:</span>
              </p>
                    
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      
                <div className="hidden sm:ml-6 sm:block">
          
                  <div className="flex space-x-4">
                    {arr.map((item) => (
                      <button
                            className="border-t-neutral-50  ml-8 sm:none hover:bg-red-600 rounded-[50px] p-2"
                            onClick={() => {
                              setYear(item);
                            }}
                          >
                            {item}
                          </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" flex flex-col">
            {arr.map((item) => (
                      <button
                            className="border-t-neutral-50  ml-8 sm:none hover:bg-red-600 rounded-[50px] p-2"
                            onClick={() => {
                              setYear(item);
                            }}
                          >
                            {item}
                          </button>
                    ))} 
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

        {/* select data */}

        <div className="mt-[18px]" >

          <select
            ref={ref_select}
            onChange={() => {
              setYear(ref_select.current.value);
            }}
            className="bg-slate-500 w-[150px] h-[30px] hover:bg-red-600 border rounded-[30px] px-[15px] mr-[30px] ml-2"
          >
            <option  >Select Year...</option>
            {arrSelect.map((item) => {
              return (
                <option className="bg-black" value={item}>
                  {item}
                </option>
              );
            })} 
          </select>
        </div>
      </div>

      <hr className="mx-[34px] my-3" />













    </div>
  )
}

export default TimeLine