import React from "react";
import "./Post.css";
import Comment from "../CommentSection/Comment";
import * as styled from "./PostStyle";
const PostContainer = props => {
  const { post } = props;
  return (
    // <PostWrapper>
    <styled.PostContainerStyled key={post.timestamp}>
      <styled.PostHeader>
        <styled.PostHeaderImg src={post.thumbnailUrl} alt="test icon" />
        <styled.PostHeaderH2>{post.username}</styled.PostHeaderH2>
      </styled.PostHeader>
      <styled.PostBody>
        <styled.PostBodyImg src={post.imageUrl} alt="post body" />
      </styled.PostBody>
      <Comment comments={post.comments} likes={post.likes} />
    </styled.PostContainerStyled>
    // </PostWrapper>
  );
};

export default PostContainer;
