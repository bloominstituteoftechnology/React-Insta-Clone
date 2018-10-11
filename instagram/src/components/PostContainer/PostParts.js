import React from 'react';

export const PostHeader = (props) => {
  return (
    <div className="post-header">
      <div className="thumbnail">
        <img 
          src={props.thumbnailUrl} 
          alt={props.username}
        />
      </div>
      <div className="name">
        {props.username}
      </div> 
    </div>
  )
}

export const PostImg = (props) => {
  return (
    <div className="post-img">
      <img 
        src={props.imgUrl}
        alt={props.username}
      />
    </div>
  )
}

export const PostFooter = (props) => {
  return (
    <div className="post-footer">
      <div className="buttons">
        <div className="like-button">like-button</div>
        <div className="comment-button">comment-button</div>
      </div>
      <div className="likes">
        {props.likes} likes
      </div>
    </div>
  )
}