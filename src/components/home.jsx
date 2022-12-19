import axios from 'axios'
import React from 'react'

import { useState, useEffect } from 'react'
import Page1 from './page1'

function Home() {
  const [data, setData] = useState({})

  const [loading, setLoading] = useState(false)

  const doApi = async () => {
    setLoading(true)
    let url = 'https://www.omdbapi.com/?s=bank&y=2020&apiKey=d592be1f'
    const { data } = await axios.get(url);
    console.log(data);

    // let obj = {
    //   Poster: data.Search[0].Poster,
    //   Title: data.Search.Title,
    //   Type: data.Search.Type,
    //   Year: data.Search.Year,
    //   imdbID: data.Search.ImdbID
    // }


    setData(data);
    setLoading(false);
  }
  console.log(data);

  useEffect(() => {
    doApi();
  }, [])


  console.log(data);
  {/* {loading ? <p>Loading...</p> : */ }
  return (
    <div>
      <div>
        { data?.map((item, i) =>

          <Page1 key={i} item={item} />


        )}
      </div>
    </div>
  )
}

export default Home