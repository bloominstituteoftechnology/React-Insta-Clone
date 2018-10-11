import React from 'react';
import Heart from '../../assets/005-heart.png';

const LikeSection = props => {
  return [
    <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <div className="like-section-wrapper">
        <img className='insta-heart' src={Heart} alt='Heart Icon' />
        <p className="speech-bubbles">&#x1F4AC;</p>
    </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes} likes</div>
    </div>
  ];
};

export default LikeSection;