import React, { Component } from "react";
import {Fragment} from "react";
import CommentSection from '../CommentSection/CommentSection';
import "../PostContainer/PostContainer.css";

const PostContainer = props => {
  return (
    <Fragment>
    <div className="postContainer">
      {props.chocolate.map(
        post => (
          console.log(post),
          (
            <div key={post.timestamp}>
              <img src={post.imageUrl} alt="" />
              <img src={post.thumbnailUrl} alt="" />

              <h2>{post.username}</h2>
              <h2>{post.timestamp}</h2>
              <h2>{post.likes}</h2>
              
              {post.comments.map(comment => {
                return <CommentSection dataInMap={comment}/>;
              })}
            </div>

)
)
)}

    </div>

    
    </Fragment>
  );
};

export default PostContainer;
