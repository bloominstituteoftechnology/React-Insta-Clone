import React from 'react';
import moment from 'moment';
import './CommentSection.css';

const CommentSection = props => {
    return <div>
        <div className="commentsContainer">
          {props.comments.map((c, index) => (
            <div key={`${c.username}'s comment ${index}`}>
              <p className="userInfo">
                <span className="username">{c.username}</span> {c.text}
              </p>
            </div>
          ))}
          <span className="timestamp">
            {moment(props.time, 'MMMM Do YYYY, h:mm:ss a')
              .fromNow()
              .toUpperCase()}
          </span>
        </div>
        <div className="commentInputContainer">
          <input type="text" placeholder="Add a comment..." className="commentInput" />
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>;
}

export default CommentSection;