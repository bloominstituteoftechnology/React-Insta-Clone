import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components';
import Username from '../Reusable';

const CommentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px 0;
`;

const LightUser = styled(Username)`
  font-size: 1.6rem;
  padding-right: 1%;
  margin: 0;
`;

const CommentPara = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;

const Comment = props => {
  return (
    <CommentWrapper>
      <LightUser>{props.comment.username}</LightUser>
      <CommentPara>{props.comment.text}</CommentPara>
    </CommentWrapper>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;