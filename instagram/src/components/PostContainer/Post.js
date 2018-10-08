import React from "react";

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={props.user.thumbnailUrl} alt="" />
        <p className="bold">{props.user.username}</p>
      </div>
      <img className="post-image" src={props.user.imageUrl} alt="" />
      <div className="sprites">
        <i className="far fa-heart" />
        <i className="far fa-comment" />
      </div>
      <p className="bold likes">{props.user.likes} likes</p>
    </div>
  );
};

export default Post;
