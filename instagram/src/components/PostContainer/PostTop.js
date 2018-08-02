import React from 'react';
import './PostContainer.css';
import PropTypes from "prop-types"

const PostTop = props => {
  return (
    <div className="posttop row ">
      <div>
        <img
          alt="postimgthumbnail"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div className = "username">{props.username.charAt(0).toUpperCase() + props.username.substr(1)}</div>
    </div>
  );
};

// idk if i even need to check typeof here.
PostTop.propTypes = {
       thumbnailUrl: PropTypes.string,
      username: PropTypes.string
};


export default PostTop;
