import React from 'react'

function Item({ item }) {

    return (

        <div className='col-sm-6 col-md-3 shadow p-0 m-4 mb-5 border-1 border'>
            <div className='p-3'>
                <p className='text-center display-6 mb-4' >{item.company}</p>
                <p >Model: {item.model}</p>
                <p >Price: {item.price}</p>
                <p >Year: {item.year}</p>
                <p >Category: {item.category}</p>
            </div>
            <div> <img className='w-100' src={item.img_url} alt={item.model} /></div>
        </div>


    )
}

export default Item