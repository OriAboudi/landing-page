import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import Coins from './coins';



function Crypto() {

    const [arr, setArr] = useState([]); //State For List Of Crypto Coins

    const doApi = async () => { // Get Coins From API By Model Axios And Updated setArr
        try {
            let url = 'http://fs1.co.il/bus/bitcoin.php';
            const { data } = await axios.get(url);
            setArr(data);
        } catch (err) {
            console.log(err.response);
        }

    };
    useEffect(() => { // Initialize The Function doApi 
        doApi()
    }, [])


    return (
        <div>
            <div className="container">
            <h2 className='text-center display-2 my-4'>List Of Currenies Crypto</h2>
                <div className="row m-4">
                    {arr?.map((item, i) => // Sending Props To Child Coins With Item And key={i}
                        <Coins key={i} item={item} />
                    )}
                </div>
            </div>
            <p className='text-center my-5 '> @Ori Aboudi</p>
        </div>
    )
}

export default Crypto