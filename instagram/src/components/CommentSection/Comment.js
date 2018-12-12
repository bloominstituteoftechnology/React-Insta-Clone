import React from 'react';
import Proptypes from 'prop-types';

const Comment = props => {
  return(
    <p className="post__comments__inst"><strong>{props.user}</strong> {props.text}</p>
  );
}

export default Comment;
