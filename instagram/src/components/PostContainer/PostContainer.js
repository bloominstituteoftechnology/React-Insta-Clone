import React from "react";
import CommentSection from "./../../components/CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";
import CommentSectionContainer from "./CommentSectionContainer";

const PostContainer = props => {
  return (
    <div className="card">
      {/* POST CONTAINER */}
      <div className="user-display">
        <img
          src={props.post.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
        <span className="user-name">{props.post.username}</span>
      </div>
      <img src={props.post.imageUrl} alt="card" className="card-img-top" />
      <CommentSectionContainer post={props.post} />
    </div>
  );
};

PostContainer.propTypes = {
  src: PropTypes.string,
  post: PropTypes.object
};

export default PostContainer;
