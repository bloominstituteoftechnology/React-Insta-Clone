import React from 'react';
import './CommentsSection.css';

const Comment = (props) => {
    return (
        <div>
          <p> <span className="user-name">{props.username}:</span> {props.text}</p>
        </div>
      );
}

export default Comment;
