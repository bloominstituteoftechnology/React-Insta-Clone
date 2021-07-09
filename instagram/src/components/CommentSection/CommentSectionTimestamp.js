import React from 'react';
import styled from 'styled-components';

const CommentSectionTimestampDiv = styled.div`
  color: #999;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  margin: 0 0 14px 0;
`;

const CommentSectionTimestamp = (props) => {
  return(
    <CommentSectionTimestampDiv>{props.timestamp}</CommentSectionTimestampDiv>
  );
};

export default CommentSectionTimestamp;