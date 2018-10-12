import React from "react";
import styled from "styled-components";

const LikeSection = props => {
  return [
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes} Likes</div>
    </div>
  ];
};

export default LikeSection;
