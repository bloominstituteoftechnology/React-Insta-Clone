import React from "react";
import PropTypes from "prop-types";
import {PostHeader, PostedImageWrapper, PostedImage, Avatar, StyledText} from "../../styles";

const PostContent = props => {
    return (
        <div>
            <PostHeader>
                <Avatar src={props.post.thumbnailUrl} alt="user avatar"></Avatar>
                <StyledText bolder>{props.post.username}</StyledText>
            </PostHeader>
            <PostedImageWrapper>
                <PostedImage src={props.post.imageUrl} alt="insert machine learning generated description"></PostedImage>
            </PostedImageWrapper>
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