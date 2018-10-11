import React from "react";
import PropTypes from "prop-types";
import {PostHeader, PostedImage} from "../../styles";

const PostContent = props => {
    return (
        <div>
            <PostHeader>
                <img src={props.post.thumbnailUrl} alt="user avatar"></img>
                <p>{props.post.username}</p>
            </PostHeader>
            <PostedImage>
                <img src={props.post.imageUrl} alt="insert machine learning generated description"></img>
            </PostedImage>
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