import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
  return (
    <div className="post--header">
      <img
      className="user--avatar"
      src={props.thumbnailUrl} 
      alt="user's avatar"/>
      <p className="user--name">{props.username}</p>
    </div>
  );
}

PostHeader.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default PostHeader;