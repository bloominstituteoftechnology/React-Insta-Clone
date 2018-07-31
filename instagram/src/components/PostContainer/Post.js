import React from "react";
import "./PostContainer.css";

const post = prop => {
  return (
    <div className="post-card">
      <div className="card-title">
        <img className="thumbnail" src={prop.butt.thumbnailUrl} />
        <div className="username"> {prop.butt.username} </div>
      </div>
      <img className="image" src={prop.butt.imageUrl} />
      <div className="likes"> {prop.butt.likes} </div>
      <div className="time"> {prop.butt.timestamp} </div>
    </div>
  );
};

export default post;
