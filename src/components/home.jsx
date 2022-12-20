

import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Page1 from './page1'

import axios from 'axios'

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [year, setYear] = useState(new Date().getFullYear())
  const [timeline, setTimeline] = useState([])

  const inputRef = useRef()
  const nav = useNavigate()
  const param = useParams()
  console.log(param.search);
  const doApi = async () => {
    try {
      setLoading(true)

      let url = `https://www.omdbapi.com/?s=${param.search || "bank"}&y=${year}&apiKey=d592be1f`
      const { data } = await axios.get(url);
      console.log(data.Search);
      setData(data.Search);
      setLoading(false);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    doApi();
  }, [param,year])



  let years = new Date().getFullYear()
  let arr = [];
  for (let i = 0; i < 30; i++) {
    arr[i] = years - i;
  }

  



  return (
    <div>
      {/* Input search */}
      <div>
        <input placeholder='Search' onKeyDown={(e) => {
          if (e.key === 'Enter') {
            nav('/' + inputRef.current.value)
          }
        }} ref={inputRef} type="text" />
      </div>
      <div>
        {/* Timeline */}
        {arr.map((item) => {
          return (
            <button onClick={() => {
              setYear(item)
            }}>{item}</button>

          )
        })}
      </div>
      {/* data */}
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