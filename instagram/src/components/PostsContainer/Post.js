import React from 'react';
import PropTypes from "prop-types";
import './PostsContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div className="post-container">
      <div className="post-header-container">
        <img src={props.post.thumbnailUrl} alt={"Profile thumbnail."} />
        <div className="username">{props.post.username}</div>
      </div>
      <img src={props.post.imageUrl} alt={"Post."} />
      <div className="post-icons-and-comments-container">
        <div className="post-icons-container">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
        </div>
        <p>{props.post.likes} likes</p>
        <CommentSection id={props.id}
                        comments={props.post.comments}
                        timestamp={props.post.timestamp}
                        onCommentSubmit={props.onCommentSubmit}
                        addNewComment={props.addNewComment} />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;
