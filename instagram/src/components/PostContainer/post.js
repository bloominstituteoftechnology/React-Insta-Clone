import React from "react";
import "./post-container";

const Post = props => {
  return (
    <div className="post">
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt="" />
        <h2>{props.post.username}</h2>
      </div>
      <div className="postImage">
        <img src={props.post.imageUrl} alt="" />
        <p>{props.post.like} like</p>
      </div>
    </div>
  );
};

export default Post;
