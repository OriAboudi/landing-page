import React from 'react'
import { useRef } from 'react'

function Child2(props) {
    const input = useRef();
    const date = props.date;

    const changeKeyDown = (e) => {
        if (e.key === "Enter") {
            props.changeDate(input.current.value);
        }
    }

    return (
        <div className='display-3 text-center p-3'>
            <div>
                <input onKeyDown={changeKeyDown} defaultValue={date} ref={input} type="date" className='col-6' />
                <div>
                    <button onClick={() => {
                        props.changeDate(input.current.value);
                    }} className='btn btn-dark'>Change Date</button>

                </div>
            </div>
        </div>
    )
}

export default Child2