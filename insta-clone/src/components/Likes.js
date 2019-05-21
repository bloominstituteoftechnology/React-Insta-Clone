//Likes
import React from 'react';

//Here the likes section is separated into its own component because it will
//need a method built on to it to increment the likes. Eventually it will be
//built out into a class container to deal with its own functionality.
const Likes = props => {
  return(
    <span>{props.likes}</span>
  )
}

export default Likes;
