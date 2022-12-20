import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Page2() {

  const param = useParams()
  console.log(param.id);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const doApiInfo = async () => {
    setLoading(true)
    let url = `http://www.omdbapi.com/?i=${param.id}&apiKey=d592be1f`;
    const { data } = await axios.get(url)
    console.log(data);
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    doApiInfo()
  }, [])
  return (
    <div>

    </div>
  )
}

export default Page2