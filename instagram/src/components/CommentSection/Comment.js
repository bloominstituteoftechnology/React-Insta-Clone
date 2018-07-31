import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';


const Comment = props => {
  return (
    <div >

    <div className="row commenting">
      <div className="user">{props.comment.username.charAt(0).toUpperCase() + props.comment.username.substr(1)}</div>
      <div className="comment">  {props.comment.text}</div>
    </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string,
  })
};

    export default Comment;
