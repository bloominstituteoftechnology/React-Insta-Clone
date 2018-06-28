import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const Comment = props => {
//   return (
//     <div className="comment-text">
//       <span className="user">{props.comment.username}</span>{' '}
//       <span className="comment">{props.comment.text}</span>
//     </div>
//   );
// };

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

const User = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const UserComment = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

const Comment = props => {
  return (
    <CommentText>
      <User>{props.comment.username}</User>{' '}
      <UserComment>{props.comment.text}</UserComment>
    </CommentText>
  )
}








Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;