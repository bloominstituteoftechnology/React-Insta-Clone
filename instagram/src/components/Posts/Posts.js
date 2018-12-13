import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./Posts.css";

const Posts = props => {
  let time = Math.round(
    (Date.now() - Date.parse(props.post.timestamp)) / 1000 / 60 / 60 / 24
  );
  if (time > 1) {
    time = Math.round(time / 365);
  }
  return (
    <div className="post">
      <div className="post__header">
        <img className="post__profile" src={props.post.thumbnailUrl} alt="" />
        <div className="post__name">
          <span>{props.post.username}</span>
        </div>
      </div>
      <img className="post__image" src={props.post.imageUrl} alt="" />
      <div className="post__body">
        <div className="post__body__buttons">
          <div className="main--buttons">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-share-square" />
          </div>
          <i className="far fa-bookmark" />
        </div>
        <span className="post__likes">{props.post.likes} likes</span>
        <CommentSection comments={props.post.comments} />
        <span className="post__timestamp">
          {time}
          {" year ago"}
        </span>
      </div>
    </div>
  );
};

export default Posts;
