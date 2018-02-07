import React from 'react';

function CommentSection(props) {
  console.log(props.arrComments);
  return (props.arrComments.map((comment, index) => {
    return <div className="commentStyle">{comment.username}: {comment.text}</div>;
  }));

}

export default CommentSection;