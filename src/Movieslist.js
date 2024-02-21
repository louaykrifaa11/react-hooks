import React from 'react'
import MovieCard from './MovieCard'

const Movieslist = (props) => {
  console.log("movies:",props.movies)
  return (
    <div>
    {props.movies.map(movie=><MovieCard movie={movie}/>)}
    </div>
  )
}

export default Movieslist