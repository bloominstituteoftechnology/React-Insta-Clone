import React from "react";
import "./Post.css";
import Comment from "../CommentSection/Comment";
const PostContainer = props => {
  const { post } = props;
  return (
    <div className="post-wrapper">
      <div className="post-container" key={post.timestamp}>
        <div className="post-header">
          <img src={post.thumbnailUrl} alt="test icon" />
          <h2 className="post-username">{post.username}</h2>
        </div>
        <div className="post-body">
          <img src={post.imageUrl} alt="" />
        </div>
        <Comment comments={post.comments} likes={post.likes} />
      </div>
    </div>
  );
};

export default PostContainer;
