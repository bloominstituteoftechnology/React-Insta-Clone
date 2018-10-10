import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { Heart, Bookmark, Message, Share } from "../../assets/assets";
import PropTypes from "prop-types";

const PostContainer = props => {
  if (!props.data.length) {
    return (
      <div className="post-container">
        <div className="fill-in-card">
          <div className="card-header">
            <div className="fill-in-thumbnail" />
          </div>
          <div className="post-img-fill-in" />
          <div className="card-comments-fill-in">
            {" "}
            <div className="icon-bar">
              <div className="icons">
                <Heart />

                <Message />

                <Share />
              </div>

              <Bookmark />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="post-container">
      {props.data.map((post) => (
        <div key={post.timestamp} className="card">
          <div className="card-header">
            <img
              src={post.thumbnailUrl}
              className="thumbnail"
              alt={post.username}
            />
            <h3>{post.username}</h3>
          </div>
          <img src={post.imageUrl} alt="post" className="post-img" />
          <div className="card-comments">
            <CommentSection post={post} />
          </div>
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    likes: PropTypes.number.isRequired
  })
};

export default PostContainer;
