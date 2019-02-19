import React from "react";
import Post from "../Post/Post";
import PropTypes from "prop-types";

const PostContainer = ({ posts }) => {
  return (
    <section className="post-container">
      {posts.map(post => (
        <Post key={post.timestamp} post={post} />
      ))}
    </section>
  );
};

// Since I check the array contents in Post.js, no need to check here:
PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContainer;
