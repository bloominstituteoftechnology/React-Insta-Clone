import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumbnail">
        <img classname="thumbnail" src="{props.thumbnailUrl}" alt="Header"/>
      </div>
      <div>{props.username}</div>
    </div>
  );
};

PostHeader.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
};

export default PostHeader;