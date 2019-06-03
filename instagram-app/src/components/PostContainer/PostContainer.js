import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div>
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