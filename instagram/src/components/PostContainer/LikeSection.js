import React from "react";
import { FontAwesomeIcon } from "./../../../node_modules/@fortawesome/react-fontawesome";

const LikeSection = props => {
  return [
    <div className="like-section" key="likes-icons-container">
      <div className="like-section-wrapper">
        <FontAwesomeIcon
          icon={["far", "heart"]}
          onClick={props.incrementLike}
        />
      </div>
      <div className="like-section-wrapper">
        <FontAwesomeIcon icon={["far", "comment"]} />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default LikeSection;
