import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Card.css';

const Comments = ({ timestamp, comments, onDeleteComment }) => {
  return (
    <div className="Card__comments">
      {comments.map((comment, i) => (
        <div key={i} className="Card__comment">
          <p>
            <span className="Card__comment-user">{comment.username}</span>
            {comment.text}
          </p>
          <span
            className="Card__comment-close"
            onClick={() => onDeleteComment(comment)}
          >
            &times;
          </span>
        </div>
      ))}
      <div className="Card__last-comment">
        {moment(timestamp, 'MMM Do YYYY h:mm:ss').fromNow()}
      </div>
    </div>
  );
};

Comments.propTypes = {
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onDeleteComment: PropTypes.func.isRequired
};

export default Comments;
