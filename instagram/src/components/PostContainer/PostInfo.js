import React from "react";
import PropTypes from "prop-types";

const PostInfo = props => {
  return (
    <div>
      <div className="post-header">
        <img
          className="user-avatar"
          src={props.postInfo.thumbnailUrl}
          alt="user"
        />
        <span>{props.postInfo.username}</span>
      </div>
      <div className="img-like">
        <img src={props.postInfo.imageUrl} alt="user image" />
        <i class="far fa-heart" />
        {props.postInfo.likes}
      </div>
    </div>
  );
};

PostInfo.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  likes: PropTypes.number
};

export default PostInfo;
