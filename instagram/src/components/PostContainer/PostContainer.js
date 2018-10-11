import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import CommentForm from '../CommentSection/CommentForm';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="Post-container">
      {props.posts.map(post =>
        <div key={post.timestamp} className="Post-card">
          <Post post={post} />
          <CommentSection comments={post.comments} />
          <p className="time">{post.timestamp}</p>
          <CommentForm />
        </div>
      )}
    </div>
  )
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;