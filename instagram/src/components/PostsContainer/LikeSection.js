import React from "react";

import "./PostsContainer.css";

const LikeSection = props => {
  return [
    <div className="like-section" key="likes-icons-container">
      <div onClick={props.incrementLike}>
        <i className="fas fa-heart" />
      </div>
      <div>
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default LikeSection;
