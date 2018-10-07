import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-title">
        <img
          src={props.posts.thumbnailUrl}
          alt={props.posts.username}
          className="post-thumbnail"
        />
        <p className="post-username">{props.posts.username}</p>
      </div>
      <img
        src={props.posts.imageUrl}
        alt={props.posts.timestamp}
        className="post-image"
      />
      <div className="like-bar">
        <div className="like-bar-images">
          <i className="far fa-heart like-bar-far" />
          <i className="far fa-comment like-bar-far" />
        </div>
        <p className="">{props.posts.likes} likes</p>
      </div>
      <div className="comments-container">
        {props.posts.comments.map((item, index) => (
          <CommentSection key={index} comments={item} />
        ))}
        <p className="timestamp">{props.posts.timestamp}</p>
        <input
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
  })
};

export default PostContainer;
