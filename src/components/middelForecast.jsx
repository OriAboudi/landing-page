import React from 'react'
import './css/main.css'
function MiddelForecast(props) {
    const data = props.data
    return (
        <div className="days">

            {data?.map((item) => {
                return (
                    <div className="bimg">
                        {/* <div className='bold ms-2'>sunDay <img src={`icons/${data.list[i].weather[0].icon}.png`} className=' img ' alt="waether" /></div>
                            <div className='d-flex align-items-center '> <div className='me-3'>{data.weather.desc}</div> <div className='me-2'>{data.weather.temp.toFixed()}℃</div>  </div> */}
                        <div className=''>{item.ori}</div>
                    </div>
                )
            })}

            {/* <div className="bimg">
                <div className='bold ms-2'>SunDay <img src={`icons/${forecast.list[1].weather[0].icon}.png`} className=' img ' alt="waether" /></div>
                <div className='d-flex align-items-center '> <div className='me-3'>{data.weather.desc}</div> <div className='me-2'>{data.weather.temp.toFixed()}℃</div>  </div>
            </div>     
            <div className="bimg">
                <div className='bold ms-2'>SunDay <img src={`icons/${forecast.list[2].weather[0].icon}.png`} className=' img ' alt="waether" /></div>
                <div className='d-flex align-items-center '> <div className='me-3'>{data.weather.desc}</div> <div className='me-2'>{data.weather.temp.toFixed()}℃</div>  </div>
            </div>
            <div className="bimg">
                <div className='bold ms-2'>SunDay <img src={`icons/${forecast.list[2].weather[0].icon}.png`} className=' img ' alt="waether" /></div>
                <div className='d-flex align-items-center '> <div className='me-3'>{data.weather.desc}</div> <div className='me-2'>{data.weather.temp.toFixed()}℃</div>  </div>
            </div> */}


        </div>
    )
}

export default MiddelForecast