import React from 'react';
import moment from 'moment';
import './Card.css';

const Comments = ({ timestamp, comments }) => {
  return (
    <div className="Card__comments">
      {comments.map(({ username, text }, i) => (
        <div key={i} className="Card__comment">
          <p>
            <span className="Card__comment-user">{username}</span>
            {text}
          </p>
        </div>
      ))}
      <div className="Card__last-comment">
        {moment(timestamp, 'MMM Do YYYY h:mm:ss').fromNow()}
      </div>
    </div>
  );
};

export default Comments;
