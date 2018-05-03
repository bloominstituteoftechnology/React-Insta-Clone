import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  console.log(props.post.username);
  return (
    <div>
      <div>
        <img src={props.post.thumbnailUrl} alt="user avatar" />
        <p>{props.post.username}</p>
      </div>
      <img src={props.post.imageUrl} alt="posted image" />
      <CommentSection />
    </div>
  );
}

export default PostContainer;
