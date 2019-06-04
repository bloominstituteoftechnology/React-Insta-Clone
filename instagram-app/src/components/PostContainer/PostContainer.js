import React from "react";
import Post from "./Post";

import PropTypes from "prop-types";

import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.postData.map(post => (
      <Post 
      postData={post}
      key={post.id}
      />
      ))}
    </div>
  )
}

PostContainer.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;