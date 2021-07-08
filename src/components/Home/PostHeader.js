import React from "react";
import { PropTypes } from "prop-types";

const PostHeader = props => {
  return (
    <div className="post-user">
      <img src={props.thumbnailUrl} alt="Hamza Elkhodiri" />
      <h1>{props.username}</h1>
    </div>
  );
};

PostHeader.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

export default PostHeader;
