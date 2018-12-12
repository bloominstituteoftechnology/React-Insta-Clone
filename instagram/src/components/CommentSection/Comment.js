import React from 'react';
import Proptypes from 'prop-types';

const Comment = props => {
  return(
    <p><strong>{props.user}</strong> {props.text}</p>
  );
}

export default Comment;
