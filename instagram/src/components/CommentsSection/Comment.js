import React from 'react';

const Comment = (props) => {
    return (
        <div>
          <span className="user-name">{props.username}:</span> <p> {props.text}</p>
        </div>
      );
}

export default Comment;
