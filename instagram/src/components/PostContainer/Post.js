import React from 'react';


const Post = props => {
  return (
    <div>
      <img src={props.post.thumbnailUrl} />
      {props.post.username}

      <img src={props.post.imageUrl} />
      <p>{props.post.likes} likes</p>
      
    </div>
  ) 
}

export default Post;