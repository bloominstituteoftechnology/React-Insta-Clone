import React from 'react';
import Comment from './Comment';
import CommentSectionTimestamp from './CommentSectionTimestamp';
import CommentSectionForm from './CommentSectionForm';
import styled from 'styled-components';

const CommentSectionDiv = styled.div`
  padding: 0 15px;
`;

const CommentsUl = styled.ul`
  margin: 0 0 18px 0;
`;

const CommentSection = (props) => {
  return(
    <CommentSectionDiv>
      <CommentsUl>
        {props.comments.map((comment, index) => {
          return <Comment key={`${Math.random()}${index}`} username={comment.username} text={comment.text} />;
        })}
      </CommentsUl>
      <CommentSectionTimestamp timestamp={props.timestamp} />
      <CommentSectionForm addNewComment={props.addNewComment} postIndex={props.postIndex} />
    </CommentSectionDiv>
  );
};

export default CommentSection;