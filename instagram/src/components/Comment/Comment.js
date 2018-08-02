import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
  ${'' /* border: 1px solid yellow; */}
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const CommentP = styled.p`
  margin: 3px;
`;

const Username = styled.p`
  font-weight: bold;
  margin: 10px;
`;

const Comment = props => {
  return (
    <CommentDiv>
      <CommentP>
        <strong>{props.comments.username}  </strong>
        {props.comments.text}
      </CommentP>
    </CommentDiv>
  )
};

Comment.propTypes = {
  text: PropTypes.string,
}

export default Comment;
