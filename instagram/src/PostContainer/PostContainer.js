import React, { Component } from "react";
import PostHeader from "./PostHeader";
import Image from "./Image";
import Icons from "./Icons";
import CommentContainer from "./CommentSection/CommentContainer";
import NewComment from "./CommentSection/NewComment";
import "./PostContainer.css";
import styled from "styled-components";
const PostContainerDiv = styled.div`
  width: 50%;
  margin: 30px auto;
  border: #e6e6e6 solid 1px;
  text-align: left;
`;
const PostContainer = prop => {
  return (
    <PostContainerDiv>
      <PostHeader
        username={prop.data.username}
        thumbnailUrl={prop.data.thumbnailUrl}
      />
      <Image ImageUrl={prop.data.imageUrl} />
      <Icons like={prop.data.likes} timestamp={prop.data.timestamp} />
      {/* {prop.data.comments.map(item => {
        return <CommentContainer item={item} />;
      })} */}
      <CommentContainer item={prop.data.comments} />
    </PostContainerDiv>
  );
};

export default PostContainer;
