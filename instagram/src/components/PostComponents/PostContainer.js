import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Post from './Post.js';

const PostContainer = props => {
  return (
    <div className="posts-area">
      {props.posts.map((postData, i) => 
        <Post
          key={postData._id}
          currentUser={props.currentUser}
          postData={postData}
          commentInput={props.commentInputs[i]}
          handleClick={props.handleClick}
          handleChange={props.handleChange}
          handleKeyDown={props.handleKeyDown} />
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
          _id: PropTypes.string.isRequired,
          username: PropTypes.string,
          text: PropTypes.string.isRequired,
          likes: PropTypes.arrayOf(
            PropTypes.string.isRequired
          ).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  commentInputs: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

PostContainer.defaultProps = {
  currentUser: "Instagram User"
}

export default PostContainer;