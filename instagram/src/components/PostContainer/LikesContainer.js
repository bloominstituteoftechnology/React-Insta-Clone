import React, { Component } from "react";

const LikesContainer = props => {
  return (
    <div className="likes-container">
      <i className="fa fa-heart-o fa-2x heart" onClick={props.addLike} />
      <i className="fa fa-comment-o fa-2x" />
      <p className="heavy-font">{props.likes} likes</p>
    </div>
  );
};

export default LikesContainer;
