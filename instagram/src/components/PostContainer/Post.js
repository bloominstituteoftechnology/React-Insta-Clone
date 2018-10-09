import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div>
      <header>
        <img src={props.post.thumbnailUrl} />
        {props.post.username}
      </header>
      
      <img src={props.post.imageUrl} />
      <p>{props.post.likes} likes</p>

      <CommentSection comment={props.post.comments} />
    </div>
  ) 
}

export default Post;