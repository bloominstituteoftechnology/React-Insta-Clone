import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

 function PostContainer(props) {

  return (
    <div className="postContainer">
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt="" />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt="" />
      <CommentSection comments={props.post.comments} />
    </div>
  );
}

 PostContainer.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

 export default PostContainer;