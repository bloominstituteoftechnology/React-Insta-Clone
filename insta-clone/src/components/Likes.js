//Likes
import React from 'react';
import './PostContainer.css';
//Here the likes section is separated into its own component because it will
//need a method built on to it to increment the likes. Eventually it will be
//built out into a class container to deal with its own functionality.
const Likes = props => {
  return(
    <div className="likes">
      <strong>{props.likes} likes</strong>
    </div>
  )
}

export default Likes;
