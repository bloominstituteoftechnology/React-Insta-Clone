import React from 'react';
import './post-container.css';

const Likes = props => {
    return (
      <div className="like-comment" onClick={props.incrementLike}>
      <i className="far fa-comment" />
      <i className="far fa-heart" />
      </div>
     
    
    )
  };

export default Likes;