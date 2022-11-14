import React from 'react'

function Child(props) {
    const date = props.date || new Date.now();
    return (
        <div className='display-3 text-center p-3'>
            Date:{date}
        </div>
    )
}

export default Child