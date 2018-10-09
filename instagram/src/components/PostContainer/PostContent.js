import React from "react";
import PropTypes from "prop-types";
import "./PostContent.css";

const PostContent = props => {
    return (
        <div className="post">
            <div className="post-header">
                <img src={props.post.thumbnailUrl} alt="user avatar"></img>
                <p>{props.post.username}</p>
            </div>
            <div className="post-content">
                <img src={props.post.imageUrl} alt="insert machine learning generated description"></img>
            </div>
        </div>
    );
}

PostContent.propTypes = {
    post: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  };

export default PostContent;