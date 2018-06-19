import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentSectionTimestamp from './CommentSectionTimestamp';
import CommentSectionForm from './CommentSectionForm';

const CommentSection = (props) => {
  return(
    <div className="comment-section">
      <ul className="comments">
        {props.comments.map((comment, index) => {
          return <Comment key={`${Math.random()}${index}`} username={comment.username} text={comment.text} />;
        })}
      </ul>
      <CommentSectionTimestamp timestamp={props.timestamp} />
      <CommentSectionForm addNewComment={props.addNewComment} postIndex={props.postIndex} />
    </div>
  );
};

export default CommentSection;