import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(info => (
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
            <i className="far fa-heart" onClick={props.addLike} />
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

export default PostContainer;
