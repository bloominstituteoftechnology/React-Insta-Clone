import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  console.log(props.arrComments);
  return (props.arrComments.map((comment, index) => {
    return <div className="commentStyle"><div className="usernameComments">{comment.username}</div><div className="comment">: {comment.text}</div></div>;
  }));

}

export default CommentSection;