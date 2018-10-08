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
                <i className="first fa fa-2x fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-2x fa-flip-horizontal fa-comment-o" aria-hidden="true"></i>
            </div>
            <div className="post-footer">
                <p>{props.post.likes} likes</p>
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