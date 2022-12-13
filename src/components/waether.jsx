import React from 'react'

import './css/main.css'
import Forecast from './forecast';



function Waether(props) {
    const data = props.data;
    return (
        <div className='main'>


            

            <Forecast  />




        </div>
    )
}

export default Waether