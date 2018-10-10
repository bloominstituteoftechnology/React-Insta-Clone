import React from 'react';

const Likes = props => {
  return (
    <div 
      onCLick={props.increment}
    >
      <div>placeholder</div>
      <div>placeholder</div>
      <div>{props.likes}</div>
    </div>
    );
}

export default Likes;