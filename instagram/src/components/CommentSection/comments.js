import React from 'react';
import PropTypes from 'prop-types';

function Comments(props) {
  return (
    <div>
      <p>
        <span>{props.comment.username} </span> 
        {props.comment.text}</p>
    </div>
  );
}

Comments.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comments; 