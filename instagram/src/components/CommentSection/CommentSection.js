import React from "react";

const CommentSection = ({ comments }) => {
  return (
    <section className="comments">
      {comments.map((comment, index) => (
        // Used index for key for now - Date.now() wasn't working for some reason:
        <div key={index} className="comment">
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;
