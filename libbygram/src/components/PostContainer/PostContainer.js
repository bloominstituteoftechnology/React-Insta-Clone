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
            <div className="post-icons">
              <i className="fa fa-heart" />
              <i className="far fa-comment" />
            </div>
            <p className="post-likes">{post.likes} likes</p>
            <CommentSection comments={post.comments} />
            <p className="post-timestamp">{post.timestamp}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
