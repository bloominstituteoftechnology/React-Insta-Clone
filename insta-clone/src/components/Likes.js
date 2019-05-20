//Likes
import React from 'react';

const Likes = props => {
  return (
    <div onClick={props.incrementLikes}>
      {props.like}
    </div>
  )
}

export default Likes;
