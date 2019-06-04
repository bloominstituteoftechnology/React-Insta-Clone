import React from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {props.postData.map(post => (
      <Post 
      postData={post}
      key={post.id}
      />
      ))}
      {props.postData.comments.map(comment => (
        <CommentSection 
        comments={comment}
        key={comment.id}
        />
      ))}
    </div>
  )
}

export default PostContainer;