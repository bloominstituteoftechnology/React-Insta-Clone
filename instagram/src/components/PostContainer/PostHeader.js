import React from "react";
import "./PostContainer";
import styled from "styled-components";

const PostHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 1% 0;
  width: 95%;
  margin: 0 auto;
`;

const ThumbnailContainer = styled.div`
  padding: 1%;
  height: 50px;
  width: 50px;
`;

const UserHeader = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 1%;
`;

const Thumbnail = styled.img`
  width: 100%;
  hieght: 100%;
  border-radius: 25px;
`;

const PostHeader = props => {
  return (
    <PostHeading>
      <ThumbnailContainer>
        <Thumbnail src={props.info.thumbnailUrl} alt="profile thumbnail" />
      </ThumbnailContainer>
      <UserHeader>{props.info.username}</UserHeader>
    </PostHeading>
  );
};

export default PostHeader;
