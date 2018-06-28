import React, { Component } from "react";
import "./PostContainer.css";
import dummyData from "../../DummyData";
import CommentSection from "../CommentSection/CommentSection";
// import Comment from "../CommentSection/Comment";

const PostContainer = props => {
  return (
    <div>
      {props.post.map(post => {
        return (
          <div className="post-container">
            <div className="post-header">
              <img
                className="user-img"
                src={post.thumbnailUrl}
                alt="User Thumbnail"
              />
              <p className="username">{post.username}</p>
            </div>
            <img className="post-img" src={post.imageUrl} alt="Post Image" />
            <CommentSection comments={post.comments} likes={post.likes}/>
            <p className="post-timestamp">{post.timestamp}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
