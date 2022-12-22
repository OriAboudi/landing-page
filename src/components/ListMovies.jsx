import React from "react";
import { Link } from "react-router-dom";

function Page1(props) {
  let item = props.item;

  return (
    <div className="m-auto  ">
      <Link to={"/MoviesInfo/" + item.imdbID}>
        <img
          className="p-4 w-full h-auto block rounded-[50px]"
          src={item.Poster}
          alt=""
        />
      </Link>
    </div>
  );
}

export default Page1;
