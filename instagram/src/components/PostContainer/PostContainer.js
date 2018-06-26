import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
  return (
    <div>
      <img src={props.post.thumbnailUrl} alt={''}/>
      <img src={props.post.imageUrl} alt={''}/>
      <CommentSection comments={props.post.comments} />
    </div> 
  );
}



export default PostContainer;