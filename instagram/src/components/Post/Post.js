import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  console.log(post);
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
      <img src={post.imageUrl} alt={post.imageUrl} />
      <CommentSection comments={post.comments} className="comment-section" />
    </section>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default Post;
