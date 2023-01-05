import React, { useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const inputRef = useRef(); // Listener to input
  const nav = useNavigate(); // Navigate page
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">

      <Link className="text-red-600 text-4xl font-bold cursor-pointer   transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 hover: duration-300 ..." to={'/'}>      OMDB Movies</Link>
      <div>
        <input
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              nav("/" + inputRef.current.value);
            }
          }}
          ref={inputRef}
          type="text"
          className="shadow appearance-none   rounded-[30px] w-full py-2 px-4 bg-gray-800 text-amber-50  leading-tight focus:outline-none focus:shadow-outline hover:bg-red-600"
        />
      </div>
    </div>
  );
}

export default Navbar;
