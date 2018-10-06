import React from 'react';
import './PostContainer.css';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentSection from '../CommentSection/CommentSection';

import PropTypes from 'prop-types';

const PostContainer = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <div key={post.username + post.timestamp}>
            <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
            <PostContent image={post.imageUrl} />
            <CommentSection comments={post.comments} likes={post.likes} />
          </div>
        );
      })}
    </>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
}

export default PostContainer;
