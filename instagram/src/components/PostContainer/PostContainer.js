import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
  return (
    <div>
      <img src={props.post.imageUrl}/>
      <CommentSection/>
    </div> 
  );
}

export default PostContainer;