import React from "react";
import './CommentSection.css'

function CommentSection(props) {
  const { comments } = props;
  return (
    <>
      {comments.map((comment, index) => (
        <>
          <p key={index}>
            <b>{comment.username}</b> {comment.text}
          </p>
        </>
      ))}
      <hr />
      <form className="comment-form">
              <input className="comment" type="text" placeholder="Add a comment" />
              <button><i className="fas fa-ellipsis-h"></i></button>
        </form>
    </>
  );
}

export default CommentSection;
