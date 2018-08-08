import React, { Component } from "react";
import CommentSection from "../../components/CommentSection/CommentSection";
import "./post.css";

const PostContainer = props => {
  return (
    <div className="container">
      {props.posts.map((eachPost, i) => {
        console.log(eachPost);
        return (
          <div key={i} className="post-border">
            {/* <PostHeader */}

            <div class="postHeader">
              <img src={eachPost.thumbnailUrl} />
              <div class="user">{eachPost.username}</div>
            </div>
            {/* /> */}
            <div className="postPic">
              <img
                alt="post thumbnail"
                className="post-image"
                src={eachPost.imageUrl}
              />
            </div>
            <CommentSection comments={eachPost.comments} />
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
