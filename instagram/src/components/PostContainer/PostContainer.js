import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

function PostContainer(props) {
  // console.log('post container', props.post);
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.post.thumbnailUrl} alt="" />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt="" />
      <CommentSection post={props.post} />
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default PostContainer;
