import React from 'react';
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
        </div>
        <div className="commentInputContainer">
          <input type="text" placeholder="Add a comment..." className="commentInput" />
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>;
}

export default CommentSection;