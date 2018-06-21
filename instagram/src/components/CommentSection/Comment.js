import React from 'react';
import UsernameSpan from '../Styles/Reusables/UsernameSpan';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentLi = styled.li`
  margin: 0 0 10px 0;
  line-height: 1.8rem;
`;

const Comment = (props) => {
  return(
    <CommentLi>
      <UsernameSpan comment>{props.username}</UsernameSpan>
      {props.text}
    </CommentLi>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default Comment;