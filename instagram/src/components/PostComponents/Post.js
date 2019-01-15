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
      <PostIcons />
      <PostHeartsCount 
        hearts={props.postData.likes}/>
      <CommentContainer
        comments={props.postData.comments} />
      <PostTimePeriod
        timestamp={props.postData.timestamp} />
      <NewCommentForm />
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
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
};

export default Post;