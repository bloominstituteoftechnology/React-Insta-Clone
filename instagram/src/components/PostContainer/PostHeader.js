import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
  return (
    <div className="post-header">
      <img src={props.thumbnail} alt="avatar" />
      {props.username}
    </div>
  );
}

PostHeader.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default PostHeader;
