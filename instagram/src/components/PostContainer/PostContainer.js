import React from 'react';
import CommentSection from './components/CommentSection/CommentSection.js';


const PostContainer = (props) => {
  return (
    <div className='post'>
      <div className='post__user'>
        <img src = {props.post.thumbnailUrl} alt = 'text' />
        <div>{props.post.username}</div>
      </div>
      <img src = {props.post.imageUrl} alt = 'text' />
      <div>{props.post.likes} likes</div>
      <CommentSection comments = {props.post.comments} />
      <div>{props.post.timestamp}</div>
    </div>
  );
}

export default PostContainer;
