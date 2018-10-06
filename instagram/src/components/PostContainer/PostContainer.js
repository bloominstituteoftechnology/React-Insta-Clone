import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="post-container">
      <PostHeader username={props.posts.username} thumbnail={props.posts.thumbnailUrl} />
      <PostContent image={props.posts.imageUrl} />
      <CommentSection comments={props.posts.comments} likes={props.posts.likes} />
    </div>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default PostContainer;
