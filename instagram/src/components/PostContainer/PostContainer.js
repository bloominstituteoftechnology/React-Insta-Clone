import React from "react";
import "./PostContainer.css";
import PropTypes from "prop-types";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div>
      {props.dataFeed.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  dataFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
  createComment: PropTypes.func,
};

export default PostContainer;