import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import heart from "../img/heart.png";
import person from "../img/person.png";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-title">
        <img
          src={props.posts.thumbnailUrl}
          alt={props.posts.username}
          className="post-thumbnail"
        />
        <p className="post-username">{props.posts.username}</p>
      </div>
      <img
        src={props.posts.imageUrl}
        alt={props.posts.timestamp}
        className="post-image"
      />
      <div className="like-bar">
        <div className="like-bar-images">
          <img src={heart} alt="Like Button" />
          <img src={person} alt="Comment Button" />
        </div>
        <p className="">{props.posts.likes} likes</p>
      </div>
      <div className="comments-container">
        {props.posts.comments.map((item, index) => (
          <CommentSection key={index} comments={item} />
        ))}
        <p className="timestamp">{props.posts.timestamp}</p>
        <input
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
      </div>
    </div>
  );
};

export default PostContainer;
