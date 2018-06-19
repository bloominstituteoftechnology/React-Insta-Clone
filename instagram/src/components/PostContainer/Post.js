import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const Post = props => {
  return (
    <div className="post-border">
      <div className="post-header">
         <img
           alt="Profile Thumbnail"
           className="thumbnail"
           src={props.post.thumbnailUrl}
         />
       <p>{props.post.username}</p>
     </div>
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="actions">
        <div className="like-comment">
          <img src="https://image.ibb.co/e2FnZd/like.png" alt="like"/>
          <img src="https://image.ibb.co/hk3KfJ/comment.png" alt="comment"/>
        </div>
        <div className="save">
          <img src="https://image.ibb.co/nuT7Zd/save.png" alt="save"/>
        </div>
      </div>
      <div className="likes">
       <p>{props.post.likes} likes</p>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
