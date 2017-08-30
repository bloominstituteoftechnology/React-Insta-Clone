import React from 'react';
import './CommentSection.css';

export const CommentSection = props => {
  console.log(props);
  return (
    <div className="comments-container">
      <ul className="comment-section">
        {props.comments.map((comments, i) => {
          return (
            <li className="comments" key={i}>
              <a className="comment-username" href="#" >{comments.username}</a>{' '}
              {comments.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
