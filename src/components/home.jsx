import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Page1 from "./ListMovies";

import axios from "axios";
import TimeLine from "./TimeLine";

function Home() {
  const [data, setData] = useState([]); // Get the data form API
  const [loading, setLoading] = useState(false); // Checker if information has arrived
  const [year, setYear] = useState("2020"); // To get movie by year
  const param = useParams(); // Listen to parameters in url
  console.log(param.search);

  //useEffect lesson to change in param or year//
  useEffect(() => {
    doApi()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param, year]);


  // Timeline Top Year //
  let arr = [];
  const timeline = () => {
    let years = new Date().getFullYear() - 3;

    for (let i = 0; i < 6; i++) {
      arr[i] = years - i * 10;
    }
  };
  timeline();
  // Timeline select //
  let arrSelect = [];
  const timelineSelect = () => {
    let years = new Date().getFullYear();

    for (let i = 0; i < 30; i++) {
      arrSelect[i] = years - i;
    }
  };
  timelineSelect();

  //doApi get to data from api OMDB//
  const doApi = async () => {
    try {
      setLoading(true);

      let url = `https://www.omdbapi.com/?s=${
        param.search || "bank"
      }&y=${year}&apiKey=d592be1f`;
      const { data } = await axios.get(url);// Or edit in get request ,{mode: 'no-cors'}
      console.log(data.Search);
      setData(data.Search);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container mx-auto">

        {/* Timeline */}
        <TimeLine arr={arr} setYear={setYear} arrSelect={arrSelect}/>

      {/* data */}
      <div>
        {data ? (
          <div>
            {loading ? (
              <div className="flex justify-center align-middle "><img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="gif" /></div >
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
          <h2 className="text-center text-[50px] mt-[50px] p-[36px]">Movie Not Found</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
