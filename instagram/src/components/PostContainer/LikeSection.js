import React from 'react';

const LikeSection = props => {
  return (
    <div
      key='likes-container'
      onClick={props.incrementCount}
    >
      <div>
        <i className="far fa-heart" />
      </div>
      <div>
        <i className="far fa-comment" />
      </div>
    </div>,
    <div key='likes-counter'>
      <div>{props.likes}</div>
    </div>
  );
};

export default LikeSection;