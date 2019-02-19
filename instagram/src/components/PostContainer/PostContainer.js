import React from "react";
import Post from "../Post/Post";
import PropTypes from "prop-types";

const PostContainer = ({ posts }) => {
  return (
    <section className="posts">
      {posts.map(post => (
        <Post key={post.timestamp} post={post} />
      ))}
    </section>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContainer;
