import React from 'react';
import PropTypes from 'prop-types';
import Username from '../../styled-components/Username';

const Comment = props => {
  return(
    <p><strong>{props.user}</strong> {props.text} <span onClick={props.deleteHandler}>&times;</span></p>
  );
}

Comment.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
