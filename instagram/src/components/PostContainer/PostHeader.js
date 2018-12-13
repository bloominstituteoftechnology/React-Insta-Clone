import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className={props.className}>
      <img src={props.data.thumbnailUrl} alt="user" />
      <h2>{props.data.username}</h2>
    </div>
  );
};

PostHeader.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
  })
};

export default PostHeader;
