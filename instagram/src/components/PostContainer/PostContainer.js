import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  // console.log(props.post.thumbnailUrl);
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.post.thumbnailUrl} alt="" />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt="" />
      <CommentSection comments={props.post.comments} />
    </div>
  );
}

export default PostContainer;
