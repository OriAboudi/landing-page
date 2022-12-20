import React from 'react'
import { Link } from 'react-router-dom';



function Page1(props) {
 
  let item = props.item;





  return (
    <div className='p-3'>
      <p>{item.Poster}</p>
      <p>{item.Title}</p>
      <p>{item.Type}</p>
      <p>{item.Year}</p>
      <Link to={'/page2/' + item.imdbID}>More info</Link>



    </div>
  )
}

export default Page1