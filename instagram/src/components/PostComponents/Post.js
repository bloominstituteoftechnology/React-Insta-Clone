import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import PostHeader from './PostHeader.js';
import PostImage from './PostImage.js';
import PostHeartsCount from './PostHeartsCount.js';
import PostIcons from './PostIcons';
import PostTimePeriod from './PostTimePeriod';
import CommentContainer from '../CommentComponents/CommentContainer.js';
import NewCommentForm from '../CommentComponents/NewCommentForm.js';

const Post = props => {
  return (
    <div className="user-post">
      <PostHeader
        dp={props.postData.thumbnailUrl}
        username={props.postData.username} />
      <PostImage
        postImage={props.postData.imageUrl} />
      <PostIcons 
        currentUser={props.currentUser}
        _id={props.postData._id}
        likes={props.postData.likes}
        handleClick={props.handleClick} />
      <PostHeartsCount 
        likes={props.postData.likes} />
      <CommentContainer
        comments={props.postData.comments} />
      <PostTimePeriod
        timestamp={props.postData.timestamp} />
      <NewCommentForm 
        _id={props.postData._id}
        commentInput={props.commentInput}
        handleChange={props.handleChange}
        handleKeyDown={props.handleKeyDown} />
    </div>
  );
};

Post.propTypes = {
  currentUser: PropTypes.string.isRequired,
  postData: PropTypes.shape({
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
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }).isRequired,
  commentInput: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

Post.defaultProps = {
  currentUser: "Instagram User"
}

export default Post;