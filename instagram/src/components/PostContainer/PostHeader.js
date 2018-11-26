import React from 'react';
import PropTypes from 'prop-types';

function PostHeader(props) {
  return (
    <div className="post-header">
    	<img className="profile-image" src={props.imgSrc}></img>
      <div className="profile-name">{props.username}</div>
    </div>
  );
}

PostHeader.propTypes = {
  imgSrc: PropTypes.string,
  username: PropTypes.string,
};

export default PostHeader;
