import React from 'react';



const LikeSection = props => {
    return [
        <div
        className="like"
        key="likes-icons-container"
        onClick={props.incrementLike}
        >

        <div className="like-section">
        <i className="far fa-heart" />
        </div>
        <div className="like-section">
          <i className="far fa-comment" />
        </div>
      </div>,
      <div className="like" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
      </div>
    ];
};
 
export default LikeSection;