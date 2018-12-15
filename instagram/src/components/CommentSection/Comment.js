import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return(
    <p onClick={props.deleteHandler}><strong>{props.user}</strong> {props.text}</p>
  );
}

Comment.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
