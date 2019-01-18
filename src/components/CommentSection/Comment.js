import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



 const Container = styled.div`
  display: flex;  
 
   `;

const CommentText = styled.p`
  font-weight: 400;
  font-size: 0.8em;
  line-height: 10px;
  padding: 0 5px;
`;

const User = styled.i`
  font-weight: 500;
  font-size: .9em;
  padding: 0 5px;
  line-height: 9px;
`;





const Comment = props => {
  return (
   <Container>
      <User>{props.comment.username}</User>
      <CommentText> {props.comment.text}</CommentText>
      </Container>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
