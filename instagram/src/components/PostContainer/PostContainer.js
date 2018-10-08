import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
          <p className="time">{moment(post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>
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
