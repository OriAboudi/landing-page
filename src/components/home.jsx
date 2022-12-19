import axios from 'axios'


import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Page1 from './page1'

function Home() {
  const [data, setData] = useState({})
  const inputRef = useRef()
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const param = useParams()

  const doApi = async () => {
    try {

      setLoading(true)
      let url = `https://www.omdbapi.com/?s=${param}||bank&y=2020&apiKey=d592be1f`
      const { data } = await axios.get(url);
      console.log(data);
      setData(data.Search);
      // setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }
  console.log(inputRef);
  useEffect(() => {
    doApi();
  }, [])




  return (
    <div>
      <input placeholder='Search' onKeyDown={(e) => {
        if (e.key === 'Enter') {
          nav.get(inputRef.current.value)
        }
      }} onInput={() => {


      }} ref={inputRef} type="text" />
      {/* <div>
        {loading ? <p>Loading...</p> : data.map((item, i) =>

          <Page1 key={i} item={item} />


        )}
      </div> */}
    </div>
  )
}

export default Home