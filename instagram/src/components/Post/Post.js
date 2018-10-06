import React from "react";
import "./Post.css";

const Post = props => {
  return (
    <div className="post">
      <div className="profile">
        <img src={props.thumbnail} alt="" />
        <p>{props.username}</p>
      </div>
      <div className="picture">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="icons">
        <i className="far fa-heart" onClick={props.likeClickHandler} />
        <i className="far fa-comment" onClick={props.commentClickHandler} />
      </div>
      <p className="likes">{props.likes} likes</p>
    </div>
  );
};

export default Post;
