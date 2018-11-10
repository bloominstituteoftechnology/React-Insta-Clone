import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="thumbnail-container">
          <img
            src={props.post.thumbnailUrl}
            alt="profile thumbnail"
            className="header-thumbnail"
          />
        </div>
        <h2 className="bold">{props.post.username}</h2>
      </div>
      <img
        src={props.post.imageUrl}
        alt="full-size post"
        className="post-img"
      />
      <div className="lower-content">
        <div className="action-buttons">
          <FontAwesomeIcon icon={["far", "heart"]} size="2x" className="icon" />
          <FontAwesomeIcon
            className="icon"
            icon={["far", "comment"]}
            flip="horizontal"
            size="2x"
          />
        </div>
        <div className="likes">
          <p className="bold">{props.post.likes} likes</p>
        </div>
        <CommentSection
          comments={props.post.comments}
          time={props.post.timestamp}
        />
      </div>
    </div>
  );
};

export default PostContainer;
