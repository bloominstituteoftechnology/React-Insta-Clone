import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="header-container">
        <img src={props.dummyData.thumbnailUrl} alt="user Thumbnail" />
        <p>{props.dummyData.username}</p>
      </div>

      <div>
        <img
          className="post-image"
          src={props.dummyData.imageUrl}
          alt="post image"
        />
      </div>

      <div>
          <p>{props.dummyData.likes}</p>
        <CommentSection dummyData={props.dummyData.comments} />
      </div>
    </div>
  );
};

export default PostContainer;
