import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  console.log("SINGLE COMMENT PROPS", props);
  
  return <p id={props.id} ><span>{props.data.username}</span>{props.data.text}</p>
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment
