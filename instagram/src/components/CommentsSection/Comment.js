import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserName = styled.span`
  font-weight: bold;
`;

const Comment = (props) => {
    return (
        <div>
          <p> <UserName>{props.username}:</UserName> {props.text}</p>
        </div>
      );
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};
export default Comment;
