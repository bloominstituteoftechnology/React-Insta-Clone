import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
const PostContainerDiv = styled.div`
  width: 600px;
  max-width: 95%;
  margin: auto;
  margin-bottom: 30px;
  border: 1px solid #e2e2e2;
  background-color: white;
`;
const PostHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;
const PostHeadingImgContainer = styled.div`
  width: 30px;
  margin-right: 10px;
`;
const ProfilePictureImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 50%;
`;
const Username = styled.h2`
  font-size: 1.5rem;
`;
const PostImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;
const PostImage = styled.img`
  width: 100%;
  height: auto;
`;
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
