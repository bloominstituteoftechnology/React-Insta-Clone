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
        <Comments like={props.post.like} comments={props.post.comment} />
      </div>
    </div>
  );
};

export default Post;
