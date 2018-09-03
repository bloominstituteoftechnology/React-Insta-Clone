import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      {props.data.map(post => (
        <Post post={post} key={post.username} />
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
