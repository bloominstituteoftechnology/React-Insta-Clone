import React from "react";
import "./PostContainer.css";

const Post = prop => {
  return (
    <div className="post-card">
      <div className="card-title">
        <img className="thumbnail" src={prop.butt.thumbnailUrl} />
        {/* // started here with the flow of props */}
        <div className="username"> {prop.butt.username} </div>
      </div>
      <img className="image" src={prop.butt.imageUrl} />
      <div className="likes"> {prop.butt.likes} </div>
      <div className="time"> {prop.butt.timestamp} </div>
    </div>
  );
};

export default Post;
