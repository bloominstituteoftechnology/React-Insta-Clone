import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map(info => (
        <div className="post-box">
          <div className="user-container">
            <img
              className="thumb"
              alt="thumbnail for user"
              src={info.thumbnailUrl}
            />
            <h2 className="user">{info.username}</h2>
          </div>
          <img className="main-image" alt="users post" src={info.imageUrl} />
          <div className="buttons">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </div>
          <span className="likes">{info.likes} likes</span>
          <CommentSection comments={info.comments} />
          <div>
            <div className="time-stamp">
              <span>{info.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  info: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default PostContainer;
