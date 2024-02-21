
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = (props) => {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.movie.posterURL} />
    <Card.Body>
      <Card.Title>{props.movie.name}</Card.Title>
      <Card.Text>
      {props.movie.description}
      </Card.Text>
      <h2>Rating from state: {props.note}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.movie.note}
          
          />
    </Card.Body>
  </Card></div>
  )
}

export default MovieCard




