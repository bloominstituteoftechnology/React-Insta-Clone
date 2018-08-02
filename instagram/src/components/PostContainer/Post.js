import React from "react";
import "./PostContainer.css";
import CommentContainer from "../CommentSection/CommentContainer";

const Post = prop => {
  return (
    <div className="post-card">
      <div className="card-title">
        <img className="thumbnail" src={prop.butt.thumbnailUrl} />
        {/* // started here with the flow of props */}
        <div className="username"> {prop.butt.username} </div>
      </div>
      <img className="image" src={prop.butt.imageUrl} />
      <CommentContainer fred={prop.butt} />
    </div>
  );
};

export default Post;
