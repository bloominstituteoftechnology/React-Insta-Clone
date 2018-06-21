import React from 'react';

const LikeSection = props => {
  return [
    <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart fa-2x" />
      </div>
      <div className="like-section" key="likes-container">
        <div className="likes-text like-section-wrapper">&nbsp;&nbsp;{props.likes}</div>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment fa-2x" />
      </div>
    </div>

  ];
};

export default LikeSection;
