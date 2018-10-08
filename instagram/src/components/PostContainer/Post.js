import React from "react";

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={props.user.thumbnailUrl} alt="" />
        <p>{props.user.username}</p>
      </div>
      <img className="post-image" src={props.user.imageUrl} alt="" />
    </div>
  );
};

export default Post;
