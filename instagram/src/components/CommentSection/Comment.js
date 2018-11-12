import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return <p key={props.data.username + Date.now()} ><span>{props.data.username}</span>{props.data.text}</p>
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment
