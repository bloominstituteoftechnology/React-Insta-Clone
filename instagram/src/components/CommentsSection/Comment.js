import React from 'react';
import './CommentsSection.css';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div>
          <p> <span className="user-name">{props.username}:</span> {props.text}</p>
        </div>
      );
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};
export default Comment;
