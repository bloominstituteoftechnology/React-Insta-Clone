import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './Style.css';

const PostContainer = props => {
    return (
    <div className="post-container">
      <h2>Post Username <span className="timestamp">Timestamp</span></h2>
      <h1>Post Image</h1>
      <p>Post ClickButtons</p>
      <h3>Post likes</h3>
      {props.postContainer.comments.map(comment => (
        <CommentSection key={comment.timestamp} comment={comment} />
      ))}
      <h1>Add a comment...</h1>
    </div>);
}

PostContainer.propTypes = {
  postContainer: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer