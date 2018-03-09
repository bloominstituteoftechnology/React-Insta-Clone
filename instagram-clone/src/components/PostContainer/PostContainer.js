import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './post-container.css';

const PostContainer = ({ postData }) => {
  return (
    <div className="post-container">
      <div className="thumbnail">
        <img src={postData.thumbnailUrl} alt={postData.username} />
        <span><b>{postData.username}</b></span>
    </div>
    <div className="image">
      <img src={postData.imageUrl} alt={postData.username} />
    </div>
    <CommentSection comments={postData.comments} />
    </div>
  );
}

export default PostContainer;



