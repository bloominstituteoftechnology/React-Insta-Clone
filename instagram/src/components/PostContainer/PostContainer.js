import React from "react";
// import PropTypes from 'prop-types';
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components";

const PostContainerDiv = styled.div`
  margin: 6rem auto 2rem auto;
  max-width: 600px;
`;

const PostContainer = props => {
  return (
    <PostContainerDiv className="postContainerDiv">
      {props.comments.map(comment => (
        <CommentSection comment={comment} key={comment.imageUrl} />
      ))}
    </PostContainerDiv>
  );
};

export default PostContainer;
