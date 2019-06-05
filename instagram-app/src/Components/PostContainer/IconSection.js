import React from 'react';

const LikeSection = props => {
  return [
    <div
      className="post-icon-section"
      key="post-icons-container"
      onClick={props.incrementLike}
    >
      <div className="post-icon-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="post-icon-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="post-icon-section" key="likes-container">
      <div className="post-icon-wrapper">{props.likes}</div>
    </div>
  ];
};

export default LikeSection;