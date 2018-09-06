import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Comments = styled.div`
  margin: 5px 0;
`;

const CommentUser = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Comment = props => {
  return (
    <Comments onClick={props.delComment}>
      <CommentUser>{props.comment.username}</CommentUser>
      {props.comment.text}
    </Comments>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
    delComment: PropTypes.func
  })
};

export default Comment;
