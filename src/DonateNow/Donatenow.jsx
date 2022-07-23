import React from 'react'
import { useParams } from 'react-router-dom'

const Donatenow = () => {
  const params=useParams()
  console.log("id",params.id)
  return (
    <div>Donatenow</div> 
  )
}

export default Donatenow