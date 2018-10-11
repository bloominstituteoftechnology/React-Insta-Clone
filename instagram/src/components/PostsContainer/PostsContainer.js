import React from 'react';
import PropTypes from 'prop-types';
import Post from './Posts';
import './Posts.css';

const PostsContainer = props => {
  return (
    <div className="Post-container">
      {props.posts.map(post =>
        <div key={post.timestamp} className="Post-card">
          <Post post={post} />
        </div>
      )}
    </div>
  )
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostsContainer;