import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const inputRef = useRef(); // Listener to input
  const nav = useNavigate(); // Navigate page
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        OMDB Movies
      </h1>
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
          className="shadow appearance-none   rounded-[30px] w-full py-2 px-4 bg-gray-800 text-amber-50  leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}

export default Navbar;
