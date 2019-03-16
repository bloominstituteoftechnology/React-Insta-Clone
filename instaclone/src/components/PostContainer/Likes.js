import React from 'react';
import './post-container.css';


const Likes = props => {
    return (
      <div className="like-comment" onClick={props.incrementLike}>
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <div className="like">{props.likes}</div>
      </div>
   
    
    )
  };

export default Likes;