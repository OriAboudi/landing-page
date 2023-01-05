import React from 'react'
import { useRef } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import {FaLock} from 'react-icons/fa'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




function TimeLine({ setYear, arr, arrSelect }) { // Get props from Home.jsx
  const ref_select = useRef();


  const navigation = [
    { name: 'Home', href: '/', current: true }

    // {arr.map((item) => {
    //   return (
    //     <button
    //       className="border-t-neutral-50  ml-8 sm:none hover:bg-red-600 rounded-[50px] p-2"
    //       onClick={() => {
    //         setYear(item);
    //       }}
    //     >
    //       {item}
    //     </button>
    //   );
    // })}
  
  ]
  
  return (
    <div>
      <div className="flex justify-between">
        {/* top year data */}
        <div>
          <nav className="px-2 mt-3 ml-5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <p className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white underline">Top Year:</span>
              </p>

              <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>

              <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <ul className="flex flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
                  {arr.map((item) => {
                    return (
                      <button
                        className="border-t-neutral-50  ml-8 sm:none hover:bg-red-600 rounded-[50px] p-2"
                        onClick={() => {
                          setYear(item);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
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



      <Disclosure as="nav" className="bg-gray-800">
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
              <p  className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white underline">Top Year:</span>
              </p>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex flex-shrink-0 items-center">
                  <FaLock className='block h-8 w-auto lg:hidden" 'color='white' size={'30px'} />
                  <FaLock className='hidden h-8 w-auto lg:block" 'color='white' size={'30px'} />
           
                </div> */}
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
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                   
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>













    </div>
  )
}

export default TimeLine