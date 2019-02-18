import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = ({ post }) => {
  return (
    <section className="post">
      <img src={post.imageUrl} alt={post.imageUrl} />
      <CommentSection comments={post.comments} className="comment-section" />
    </section>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default PostContainer;
