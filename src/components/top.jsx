import React from 'react'

function Top() {
  return (
    <div className='top'>
    <div className="city">
        <p className='ps-4 pt-4' > {data.location.city}</p>
    </div>

    <div className='temp d-flex justify-content-between'>
        <h1 className='ps-3 '>{data.weather.temp.toFixed()}℃</h1>
        <img src={`icons/${data.icon}.png`} className='h-100 ' alt="waether" />

    </div>

    <div className='d-flex align-items-center'>

        <p className='ps-4'>{data.weather.desc}</p>
    </div>

</div>
  )
}

export default Top