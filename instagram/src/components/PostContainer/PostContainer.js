import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import heart from "./heart.png";
import comment from "./comment.png";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="header-container">
        <img
          className="user-thumbnail"
          src={props.dummyData.thumbnailUrl}
          alt="user Thumbnail"
        />
        <p>{props.dummyData.username}</p>
      </div>

      <div>
        <img
          className="post-image"
          src={props.dummyData.imageUrl}
          alt="post"
        />
      </div>
      <div>
        <div className="post-icons">
          <img className="heart-icon" src={heart} alt="heart" />
          <img className="comment-icon" src={comment} alt="comment" />
        </div>

        <p className="user-likes">{props.dummyData.likes} Likes</p>
        <CommentSection dummyData={props.dummyData.comments} />
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
    })
  )
};

export default PostContainer;
