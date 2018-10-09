import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
  // console.log('Comment Section props are:',{props});
  const comments = props.comments;
  // console.log('All Comments are:',{comments});
  console.log('comment section props are', {props})
  return (
    <div className="CommentContainer">
      {comments.map((comment, index) => (
        <div className="singlecomment" key={index} comment={comment}>
          <p>
            '<span className="username">{comment.username}</span>:{" "}
            {comment.text}'
          </p>
        </div>
      ))}
      <form onSubmit={props.createComment}>
        <input
          type="text"
          onChange={props.updateInput}
          name="newComment"
          value={props.newComment}
          placeholder="Add comment..."
        />
      </form>
    </div>
  );
};

export default CommentSection;
