import React from "react";
import CommentSection from "../CommentSection/CommentSection";




const Post = props => {
  return (
    
      <div>
      <div className="image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
          />
       </div>
     <div>{props.post.username}</div>
     <div>{props.post.likes}</div>
     <div>{props.comments.text}</div>
     </div>
  );
};

export default Post;