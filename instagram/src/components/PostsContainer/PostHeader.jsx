import React from 'react';
import './PostStyles.css';
import PropTypes from 'prop-types';

const PostHeader = props => {
  // console.log(props)
    return (
      <div className="post-header">
        <div className="post-thumb-wrapper">
          <img
            alt="post header"
            className="post-thumb"
            src={props.thumbnailUrl}
          />
        </div>
        <div className="usr">{props.username}</div>
      </div>
    );
};

PostHeader.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string
}

export default PostHeader