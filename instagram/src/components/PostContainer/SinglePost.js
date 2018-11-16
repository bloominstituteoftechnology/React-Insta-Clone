import React from "react";
import data from "../../dummy-data";
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

const SinglePost = props => {
  const username = props.match.param.username;
  const singlePost = data.find(post => `${post.username}` === username);
  return (
    <PostWrapper>
      <PostHeader info={singlePost} />
      <PostImage src={singlePost.imageUrl} />
      <LowerContent>
        <PostInfo likes={singlePost.likes} id={singlePost.thumbnailUrl} />
        <CommentSection
          post={singlePost}
          // newComment={props.addComment}
          id={singlePost.imageUrl}
        />
      </LowerContent>
    </PostWrapper>
  );
};

export default SinglePost;
