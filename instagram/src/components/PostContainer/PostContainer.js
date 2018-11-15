import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PostInfo from "./PostInfo";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import styled from "styled-components";

const LowerContent = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const PostWrapper = styled.div`
  border: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5% auto;
`;

const PostContainer = props => {
  return (
    <PostWrapper>
      <PostHeader info={props.post} />
      <PostImage src={props.post.imageUrl} />
      <LowerContent>
        <PostInfo likes={props.post.likes} id={props.post.thumbnailUrl} />
        <CommentSection
          post={props.post}
          newComment={props.addComment}
          id={props.post.imageUrl}
        />
      </LowerContent>
    </PostWrapper>
  );
};

export default PostContainer;
