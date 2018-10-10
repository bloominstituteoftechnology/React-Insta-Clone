import React, { Component } from "react";

const LikesSection = props => {
  return (
    <div
      className="like"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <div className="d-flex icons">
        <i className="far fa-heart icon" />
        <i className="far fa-comment icon" />
      </div>
      <div className="likes-text">
        <span className="username">{props.likes} likes</span>
      </div>
    </div>
  );
};

export default LikesSection;
