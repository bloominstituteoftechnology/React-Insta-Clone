import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Post from './Post.js';
import PostHeader from './PostHeader.js';
import PostImage from './PostImage.js';
import PostHeartsCount from './PostHeartsCount.js';
import PostIcons from './PostIcons';
import PostTimePeriod from './PostTimePeriod';
import CommentContainer from '../CommentComponents/CommentContainer.js';
import NewCommentForm from '../CommentComponents/NewCommentForm.js';

const PostContainer = props => {
  return (
    <div className="posts-area">
      {props.posts.map((postData, i) => 
        <Post
          key={i}
          postData={postData} />
      )}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.arrayOf(PropTypes.string),
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string.isRequired
      })).isRequired
    }).isRequired
  ).isRequired
};

export default PostContainer;