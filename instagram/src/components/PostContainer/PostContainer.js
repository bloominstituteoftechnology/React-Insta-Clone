import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="post--container">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post--img">
        <img src={props.post.imageUrl} alt=""/>
      </div>
      <CommentSection
        username={props.post.username}
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
        commentText={props.commentText}
        handleFormInputChange={(e) => props.handleFormInputChange(
          e,
          props.post.username,
          props.post.timestamp
        )}
        handleFormInputSubmit={(e) => props.handleFormInputSubmit(
          e,
          props.post.username,
          props.post.timestamp)}
        updateLikes={(u, t, n) => props.updateLikes(u, t, n)}
        handleRemoveComment={(i) => props.handleRemoveComment(
          props.post.username,
          props.post.timestamp,
          i)}
      />
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })),
  }).isRequired,
  commentText: PropTypes.string.isRequired,
  handleFormInputChange: PropTypes.func.isRequired,
  handleFormInputSubmit: PropTypes.func.isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default PostContainer;