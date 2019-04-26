import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import {
  PostContainerDiv,
  PostHeading,
  PostHeadingImgContainer,
  ProfilePictureImage,
  Username,
  PostImageContainer,
  PostImage
} from "./PostContainerStyles.js";
const PostContainer = props => {
  const { username, thumbnailUrl, imageUrl, likes, comments } = props.post;
  return (
    <PostContainerDiv>
      <PostHeading>
        <PostHeadingImgContainer>
          <ProfilePictureImage
            src={thumbnailUrl}
            alt={`{username}'s profile picture`}
          />
        </PostHeadingImgContainer>
        <Username>{username}</Username>
      </PostHeading>
      <PostImageContainer>
        <PostImage src={imageUrl} alt={`{username}'s post`} />
      </PostImageContainer>

      <CommentSection
        comments={comments}
        likes={likes}
        userProfile={props.userProfile}
      />
    </PostContainerDiv>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string
};

export default PostContainer;
