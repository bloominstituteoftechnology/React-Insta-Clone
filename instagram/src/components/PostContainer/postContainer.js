import React from 'react';
import './postContainer.css';

function postContainer (props) {
  return(
    <div className='postContainer'>
      <div className='postContainer__header'>
        <img src={props.post.thumbnailUrl} />
        <h4 className='postContainer__username'>{props.post.username}</h4>
      </div>
      <div className="postContainer__image">
        <img src={props.post.imageUrl} />
      </div>
      <div className="postContainer__main">
        <div className='postContainer__likes'>
          <div>{props.post.likes}</div>
        </div>
        <commentSection comments={props.post.comments} /> 
        {/* <div>{props.post.text}</div>
        <div>{props.post.timestamp}</div> */}
      </div>
    </div>
  )
}

export default postContainer;