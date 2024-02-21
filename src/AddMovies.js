import React, { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';


const AddMovies = (props) => {
    const [note,setNote]=useState()
    const name=useRef()
    const description=useRef()
    const posterURL=useRef()
  return (
<div>
    <input type='text' placeholder='type your movie name'ref={name}></input>
    <input type='text' placeholder='type your movie description'ref={description}></input>
    <input type='text' placeholder='type your movie posterURL'ref={posterURL}></input>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={note}
          onStarClick={(value)=>{setNote(value)}}
        />
        <button onClick={()=>{
            props.setMovies([...props.movies,{
                name:name.current.value,
                description:description.current.value,
                posterURL:posterURL.current.value,
                note:note
            }])
        }}>New movie</button>
    </div>
  )
}

export default AddMovies