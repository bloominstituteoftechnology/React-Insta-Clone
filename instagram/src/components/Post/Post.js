import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const Post = ({
  post,
  addNewLike,
  newCommentText,
  changeHandler,
  addNewComment
}) => {
  return (
    <section className="post">
      <div className="post-header">
        <img
          src={post.thumbnailUrl}
          alt="post.thumbnailUrl"
          className="user-thumbnail"
        />
        <h3>{post.username}</h3>
      </div>
      <img src={post.imageUrl} alt={post.imageUrl} className="post-image" />
      <i
        onClick={e => addNewLike(e, post.timestamp)}
        className="icon-post far fa-heart"
      />
      <i className="icon-post far fa-comment" />
      <h3>{post.likes} likes</h3>
      <CommentSection
        comments={post.comments}
        timestamp={post.timestamp}
        newCommentText={newCommentText}
        changeHandler={changeHandler}
        addNewComment={addNewComment}
        className="comment-section"
      />
    </section>
  );
};

// Checks each post object's contents:
Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default Post;
