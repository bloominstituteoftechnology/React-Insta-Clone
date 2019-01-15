import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const PostHeader = props => {
  return (
    <div className="user-post-header">
      <img className="user-dp" src={props.dp} alt={props.username}/>
      <span className="username">{props.username} </span>
    </div>
  );
};

PostHeader.propTypes = {
  dp: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

PostHeader.defaultProps = {
  dp: "../../../images/user.png"
};

export default PostHeader;