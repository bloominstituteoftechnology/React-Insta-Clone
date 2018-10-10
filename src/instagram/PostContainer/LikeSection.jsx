import React from "react";

const LikeSection = props => {
  return [
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes} Likes</div>
    </div>
  ];
};

export default LikeSection;
