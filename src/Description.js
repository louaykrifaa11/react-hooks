import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Description = (props) => {
    const navigate=useNavigate()
    const params=useParams()
    let movie=props.movies.find(el=>el.name==params.name)
  return (
    <div>
        <h1>{movie.name}</h1>
    <h2>{movie.description}</h2>
    {movie.trailer}
    <button onClick={()=>{navigate('/')}}>Back To Home</button>
    
    </div>
  )
}

export default Description
