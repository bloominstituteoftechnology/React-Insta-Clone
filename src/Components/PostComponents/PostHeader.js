import React from 'react';
import PropTypes from 'prop-types';
import './posts.css';

const PostHeader = props => {
  return(
    <div className="post-header">
      <div className="user-icon"><img src={props.thumbnail} alt="user profile icon" /></div>
      <div className="user-name"><strong>{props.user}</strong></div>
    </div>
  );
};

PostHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default PostHeader;
