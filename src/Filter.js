import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = (props) => {
  return (
    <div>
        <input type='text'placeholder='search by name'onChange={(event)=>props.setNameSearch(event.target.value)}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.SearchNote}
          onStarClick={(value)=>{props.setSearchNote(value)}}
        />
    </div>
  )
}

export default Filter