import React from 'react';

const Likes = props => {
  return (
    <div 
      onCLick={props.increment}
    >
      <div>
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      </div>
      
      <div>{props.likes}</div>
    </div>
    );
}

export default Likes;