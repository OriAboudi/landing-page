
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Rating } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function MoviesInfo() {

  const param = useParams() // param is used to determine which movie should appear, by ID             
  const [data, setData] = useState([]) // Get data from API request
  const [loading, setLoading] = useState(false) // Flag loading state


  const doApiInfo = async () => {
    setLoading(true) // open flag for loading 
    let url = `https://www.omdbapi.com/?i=${param.id}&apiKey=d592be1f`;
    const { data } = await axios.get(url)
    console.log(data);
    setData(data) // update data from API response
    setLoading(false) // close flag after request
  }

  useEffect(() => { // render effect with info about movie
    doApiInfo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <div className='flex justify-center'>
        {data.Error ? <h2 className="text-center text-[40px] mt-[50px] p-[26px]">No info about this Movie</h2> : // No info about this Movie
          <div> {loading ?
            <div className="flex justify-center align-middle "> 
              <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="gif" /></div >// loading gif

            : <div className='my-auto mt-[62px]  md:flex justify-center  '>

              <div className='flex justify-center '>
                <img src={data.Poster} alt={data.Title} className='mt-4 sm: w-[full] md:w-[300px]  rounded-[36px] ' />
              </div>

              <div className=' m-[36px] w-[250px]  flex-col items-baseline text-center'>
                <div className=''>
                  <h2 className='text-[30px]'>{data.Title}</h2>
                  <p className='text-lg '>Country:<span className='text-base'>{data.Country}</span> </p>
                  <p>DVD: {data.DVD}</p>
                  <p>Director: {data.Director}</p>
                  <p>Genre: {data.Genre}</p>
                  <p>Language: {data.Language}</p>
                  <p>Actors: {data.Actors}</p>
                  <p>Writer:{data.Writer}</p>

                  <Rating // Show rating information in stars
                    name="customized-10"
                    value={data.imdbRating}
                    max={10}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarHalfIcon style={{ opacity: 0.55, color: 'wheat' }} fontSize="inherit" />}
                  />

                </div>
              </div>
            </div>
          }</div>}


      </div>
      <div className='flex justify-center my-[36px] '>
        <Link to={'/'} className=' bg-red-600 hover:bg-gray-800 py-3 px-[56px] rounded-[30px]'>Back </Link>

      </div>
    </div>
  )
}

export default MoviesInfo