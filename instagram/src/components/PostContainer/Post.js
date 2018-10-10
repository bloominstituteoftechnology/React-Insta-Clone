import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div>
      <header>
        <img src={props.post.thumbnailUrl} alt="user pic"/>
        {props.post.username}
      </header>
      
      <img src={props.post.imageUrl}  alt="main pic"/>
      <p>{props.post.likes} likes</p>

      <CommentSection comments={props.post.comments} />
    </div>
  ) 
}

export default Post;