import React from "react";
import PropTypes from "prop-types";
import Posts from "../Posts/Posts";
import "./PostContainer.css";

const PostContainer = props => {
  return <Posts posts={props.posts} />;
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;
