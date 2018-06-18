import React from 'react';

const Post = props => {
  return (
    <div>
      <img className="thumb-image" src={props.thumbnail} alt="" />
      <h4>{props.username}</h4>
      <img className="post-image" src={props.image} alt="" />
      <h5>{props.likes}</h5>
      <h6>{props.time}</h6>
    </div>
  )
};

export default Post;
