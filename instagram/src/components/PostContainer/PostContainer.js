import React from "react";
import PostHeader from "./PostHeader";
import PostPicture from "./PostPicture";
import PostIcons from "./PostIcons";
import CommentContainer from "../CommentSection/CommentContainer";
import styled from "@emotion/styled/macro";

const StyledPostContainer = styled("div")`
  display: grid;
  width: 550px;
  border: 1px solid black;
`;

const StyledCommentContainer = styled("div")`
  display: grid;
  justify-content: flex-start;
`;

const PostContainer = props => {
  return (
    <StyledPostContainer>
      <PostHeader data={props.data} />
      <PostPicture data={props.data} />
      <PostIcons
        data={props.data}
        addLike={props.addLike}
        username={props.username}
        handleClick={props.handleClick}
      />
      <StyledCommentContainer>
        <CommentContainer
          comments={props.comments}
          data={props.data}
          addComment={props.addComment}
          inputText={props.inputText}
          handleChange={props.handleChange}
          username={props.username}
        />
      </StyledCommentContainer>
    </StyledPostContainer>
  );
};

export default PostContainer;
