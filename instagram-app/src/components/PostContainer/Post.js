import React from "react";

import "./PostContainer.css";

import PostTop from "./PostTop";
import PostContent from "./PostContent";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return (
    <div className="post-border">
      <PostTop 
      username={props.postData.username}
      thumbnail={props.postData.thumbnailUrl}
      />
     <PostContent 
     image={props.postData.imageUrl}
     likes={props.postData.likes}
     />
     {props.postData.comments.map(comment => (
      <CommentSection 
      comments={comment}
      key={comment.id}
      />
     ))}
     <span id="timestamp">
      {props.postData.timestamp}
     </span>
     <input 
     placeholder="Add a comment..."
     className="post-input"
     />
    </div>
  )
}

export default Post;