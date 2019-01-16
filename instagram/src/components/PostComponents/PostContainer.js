import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Post from './Post.js';

const PostContainer = props => {
  return (
    <div className="posts-area">
      {props.posts.map((postData, i) => 
        <Post
          key={postData.imageUrl}
          currentUser={props.currentUser}
          postData={postData}
          handleClick={props.handleClick} />
      )}
    </div>
  );
};

PostContainer.propTypes = {
  currentUser: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

PostContainer.defaultProps = {
  currentUser: "Instagram User"
}

export default PostContainer;