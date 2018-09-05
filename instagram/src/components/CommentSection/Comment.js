import React from 'react';
import styled from 'styled-components'

const CommentUser = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin-right: 6px;
  margin-bottom: 3px;
  color: #545454;

  
`;

const CommentWrapper = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 1;
  flex-wrap: wrap;
  width: 100%;
  
  p {
    font-size: 12px;
    margin-bottom: 8px;

  }
`;

const Comment = (props) => {
    return ( 
        <CommentWrapper>
            <CommentUser>{props.comment.username}</CommentUser>
            <p>{props.comment.text}</p>
        </CommentWrapper>
     );
}
 
export default Comment;