import React from 'react';

const LikeSection = props => {
  return (
    <div className="like-section" key="like-icons-container" onClick={props.incrementLike}>
      <div className="like-section-wrapper">
        <i className="far fa-heart"></i>
      </div>

      <div className="like-section-wrapper">
        <i className="far fa-comment"></i>
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  );
};

export default LikeSection;