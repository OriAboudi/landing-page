import axios from 'axios'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  let input_ref = useRef()
  const [query] = useSearchParams()
  const nav = useNavigate()
  useEffect(() => {

    doApi()

  }, [query])

  const doApi = async () => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${query.get('city') || "tel%20aviv"}&appid=6692341014244b16b26d894eca7afd60&units=metric`
      const { data } = await axios.get(url)
      // console.log(data);

      const obj = {
        location: {
          city: data.name,
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        },
        temp: data.main.temp,
        weather: {
          temperature: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          desc: data.weather[0].description,
        },
        coord: {
          lon: data.coord.lon,
          lat: data.coord.lat
        }
      }
      console.log(obj);
      setData(obj)
      setLoading(false);

    } catch (error) {
      console.log(error);
    }


  }
  return (
    <div >
      <div>
        <input ref={input_ref} className='form-control' type="text" />
        <button className='btn btn-primary mt-2' onClick={() => {
          console.log(input_ref.current.value);
          nav('?city=' + input_ref.current.value)


        }}>Search</button>
      </div>

      {loading ? <h1> Loading...</h1> :
        <div>
          <h1>City: {data.location.city}</h1>
          <h1>Country: {data.location.country}</h1>
          <h1>SunRise: {data.location.sunrise}</h1>
          <h1>Sunset: {data.location.sunset}</h1>
        </div>
      }


    </div>
  )
}

export default Home