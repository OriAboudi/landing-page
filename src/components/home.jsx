import axios from 'axios'
import React from 'react'

import { useState, useEffect } from 'react'

function Home() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const doApi = async () => {
    setLoading(true)
    let url = 'https://www.omdbapi.com/?s=bank&y=2020&apiKey=d592be1f'
    const { data } = await axios.get(url);
    console.log(data.Search);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    doApi();
  }, [])



  return (
    <div>
      {loading ? <p>Loading...</p> :
        data?.map((item) => {
          return (
            <div>
              <p>{item.Search.Title}</p>
              <p>{item.Search.Year}</p>
              <p>{item.Search.Type}</p>
              <p>{item.Search.Poster}</p>
            </div>
          )

        })}
    </div>
  )
}

export default Home