import React from 'react'
import { useRef } from "react";

function TimeLine({ setYear, arr, arrSelect }) { // Get props from Home.jsx
  const ref_select = useRef();

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

    </div>
  )
}

export default TimeLine