import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Page1 from "./page1";

import axios from "axios";

function Home() {
  const [data, setData] = useState([]); // Get the data form API
  const [loading, setLoading] = useState(false); // Checker if information has arrived
  const [year, setYear] = useState('2020'); // To get movie by year

  const param = useParams(); // Listen to parameters in url
  console.log(param.search);

  // Timeline//
  let arr = [];
  const timeline = () => {
    let years = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
      arr[i] = years - (i*10);
    }
  };
  timeline();

  //doApi get to data from api OMDB//
  const doApi = async () => {
    try {
      setLoading(true);

      let url = `https://www.omdbapi.com/?s=${param.search || "bank"}&y=${year}&apiKey=d592be1f`;
      const { data } = await axios.get(url);
      console.log(data.Search);
      setData(data.Search);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect lesson to change in param or year//
  useEffect(() => {
    doApi();
  }, [param, year]);

  return (
    <div>
     
      <div className="mb-4 flex p-4 container mx-auto">
        {/* Timeline */}
        <h2 className="p-4 ml-[25px] text-[25px] underline">Top Year:</h2>
        {arr.map((item) => {
          return (
            <button className="border-t-neutral-50 p-4"
              onClick={() => {
                setYear(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* data */}
      <div>
        {data ? (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="container mx-auto">
              <div className="flex flex-wrap ">
                {data.map((item, i) => {
                  return <Page1 key={i} item={item} />;
                })}
              </div>
              </div>
            )}
          </div>
        ) : (
          <p>Movie Not Found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
