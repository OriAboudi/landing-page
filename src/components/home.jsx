

import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Page1 from './page1'

import axios from 'axios'

function Home() {
  const [data, setData] = useState([])
  const inputRef = useRef()
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const param = useParams()
  console.log(param.search);
  const doApi = async () => {
    try {

      setLoading(true)
      let url = `https://www.omdbapi.com/?s=${param.search || "bank"}&y=2020&apiKey=d592be1f`
      const { data } = await axios.get(url);
      console.log(data);
      setData(data.Search);
      setLoading(false);

    } catch (error) {
      console.log(error);

    }
  }
  console.log();

  useEffect(() => {
    doApi();
  }, [param])




  return (
    <div>
      <input placeholder='Search' onKeyDown={(e) => {
        if (e.key === 'Enter') {
          nav('/' + inputRef.current.value)
        }
      }} ref={inputRef} type="text" />

      <div>

        {data ? <div>
          {loading ? <p>Loading...</p> :

            data.map((item, i) => {
              return (

                <Page1 key={i} item={item} />
              )
            })

          }</div> : <p>Movie Not Found</p>}
      </div>



    </div >
  )
}

export default Home