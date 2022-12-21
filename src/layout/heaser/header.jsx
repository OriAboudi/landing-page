import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[300px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[300px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src="https://www.regmovies.com/static/dam/jcr:4e43319d-768a-436c-93fe-487556eeb337/21-movies-in-2021-Title-Image2.jpg"
            alt=""
          />
          {/* <div className="absolute w-full top-[20%] p-4 md:p-8"> */}
            {/* <h1 className="text-3xl md:text-5xl font-bold">sdfsdfsfs</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">Released:</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              dfsdfsffsfdf
            </p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
