import React from "react";
import "./post-container";
import Comments from '../CommentSection/comments';

const Post = props => {
  return (
    <div className="post">
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt="" />
        <h2>{props.post.username}</h2>
      </div>
      <div className="postImage">
        <img src={props.post.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Post;
