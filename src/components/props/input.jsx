import React, { useState } from 'react'
import { useEffect } from 'react';

import { useRef } from 'react'

const Input = () => {

    const [res, setRes] = useState("");
    const input = useRef()
    const selectRef = useRef();
    useEffect(() => {

    },[res])


    return (
        <div className='my-5 p-5 shadow border border-1 d-flex justify-content-center'>
            <div>
                <h1>Input:{res}</h1>
                <input value={res} onInput={()=>{setRes(input.current.value)}} type="text" ref={input} />
                <button onClick={() => setRes(input.current.value)}>submit</button>

                <select onChange={() => setRes(selectRef.current.value)} ref={selectRef} className='form-select mt-3'>
                    <option value="Messi">Messi</option>
                    <option value="CR7">CR7</option>
                    <option value="Ronaldiho">Ronaldiho</option>
                </select>

            </div>
        </div>
    )
}

export default Input