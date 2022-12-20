import React from 'react'
import { useParams } from 'react-router-dom'

function Page2() {

  const param = useParams()
  console.log(param.id);

  const doApiInfo = ()=>{
    let url ='';


  }
  return (
    <div>

    </div>
  )
}

export default Page2