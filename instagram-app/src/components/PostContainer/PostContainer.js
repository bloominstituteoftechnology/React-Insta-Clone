import React from "react";
import Post from "./Post";
// import CommentSection from "../CommentSection/CommentSection";

import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.postData.map(post => (
      <Post 
      postData={post}
      key={post.id}
      />
      ))}
    </div>
  )
}

export default PostContainer;