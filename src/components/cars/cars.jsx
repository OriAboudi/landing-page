import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function Cars() {
    const [car, setCar] = useState([]);
    const doApi = async () => {
        let url = 'https://project-yarin.herokuapp.com/cars?perPage=99'
        const resp = await axios.get(url);
        console.log(resp.data);
        setCar(resp.data);
    }
    useEffect(() => {
        doApi();
    }, [])
    return (
        <div>
            {car[0]?._id&&car[0].company}
        </div>
    )
}

export default Cars