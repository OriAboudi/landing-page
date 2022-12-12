import axios from 'axios'
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Loading.css'



const Home = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [query] = useSearchParams()
  const input_ref = useRef()
  const nav = useNavigate()

  useEffect(() => {

    doApi()

  }, [query])

  const doApi = async () => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${query.get('city') || "tel%20aviv"}&appid=6692341014244b16b26d894eca7afd60&units=metric`
      const { data } = await axios.get(url)

      const obj = {
        location: {
          city: data.name,
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        },
        temp: data.main.temp,
        weather: {
          temp: data.main.temp,
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
  // let loadingGPT = <img src='https://external-preview.redd.it/afMq7pl_PpRPMnxc57OX5jAmocEYfjnB8FW7liddzL8.jpg?auto=webp&s=f659450f50a5e6faddf33b9d32e9f671a09e86c0' />
  return (
    <div className='container '>
      <div className='col-8 col-md-5 col-lg-6 d-flex m-auto pt-4 '>
        <input placeholder='Enter Location' ref={input_ref} className=' form-control ' type="text" />
        <button className='btn btn-dark mx-4' onClick={() => {
          console.log(input_ref.current.value);
          nav('?city=' + input_ref.current.value)


        }}>Search</button>
      </div>

      {loading ? <div className='d-flex align-items-center justify-content-center'></div> :
        <div className='main'>


          <div className='top'>
            <div className="city">
              <p className='ps-3 pt-4' > {data.location.city}</p>
            </div>
            <div className='temp d-flex justify-content-between'><div>
              <h1 className='ps-3 '>{data.weather.temp.toFixed()}℃</h1>

            </div>
            <div className='d-flex align-items-center'>

              <p>{data.weather.desc}</p>
            </div>
          
            </div>
            <div className="description">
            </div>
          </div>


          <div className="button">
            <div className=" sunrise">
              <p className='bold'>{new Intl.DateTimeFormat('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(data.location.sunrise*1000) }</p>
              <p>Sunries</p>
            </div>
            <div className=" sunset">
              <figure>
                <p className='bold'>{new Intl.DateTimeFormat('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(data.location.sunset*1000)}</p>
                <p>Sunset</p>
              </figure>
            </div>
          </div>


          <div className="button">
            <div className="feels">
              <p className='bold'>{data.weather.temp.toFixed()}</p>
              <p >Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{data.weather.humidity}%</p>
              <p >Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{data.weather.wind} HPM</p>
              <p >Wind Speed</p>
            </div>
          </div>
        </div>
      }


    </div>
  )
}

export default Home