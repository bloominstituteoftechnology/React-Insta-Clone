/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const PostHeader = props => {
  return (
    <div className="header-element-wrapper">
      <img
        src={props.data.thumbnailUrl}
        alt="[]"
        className="header-element header-thumbnail"
      />
      <a href="#" className="header-element header-username">
        {props.data.username}
      </a>
    </div>
  );
};

export default PostHeader;
