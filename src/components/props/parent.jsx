import React from 'react'
import { useState } from 'react'
import Child from './child'
import Child2 from './child2'
import Input from './input'

function Parent() {

    const [date, setDate] = useState('2020-11-14')
    return (
        <div>
            <div className='display-3 text-center p-3'>parent work</div>
            <Child date={date} />
            <Child2 date={date} changeDate={setDate} />
            <Input/>
        </div>

    )
}

export default Parent