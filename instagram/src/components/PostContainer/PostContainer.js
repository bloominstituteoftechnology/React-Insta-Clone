import React from "react";
import "./Post.css";
import Comment from "../CommentSection/Comment";
import {
  PostWrapper,
  PostContainerStyled,
  PostHeader,
  PostHeaderH2,
  PostBody,
  PostBodyImg,
  PostHeaderImg
} from "./PostStyle";
const PostContainer = props => {
  const { post } = props;
  return (
    <PostWrapper>
      <PostContainerStyled key={post.timestamp}>
        <PostHeader>
          <PostHeaderImg src={post.thumbnailUrl} alt="test icon" />
          <PostHeaderH2>{post.username}</PostHeaderH2>
        </PostHeader>
        <PostBody>
          <PostBodyImg src={post.imageUrl} alt="post body" />
        </PostBody>
        <Comment comments={post.comments} likes={post.likes} />
      </PostContainerStyled>
    </PostWrapper>
  );
};

export default PostContainer;
