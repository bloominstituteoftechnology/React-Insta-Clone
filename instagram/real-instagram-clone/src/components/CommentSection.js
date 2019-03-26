import React from "react";
import Comment from "./Comment";
import "../App.css";
const CommentSection = props => {
  return (
    <div>
      <div className="comment-section">
        <div className=" comment-wrapper">
          {props.comment.map((comment, i) => (
            <Comment username={comment.username} key={i} text={comment.text} />
          ))}
        </div>
        <div className="input-wrapper">
          <div className="input-field">
            <input
              className="comment-input"
              type="text"
              placeholder="Add Comment.."
            />
          </div>
          <div>
            {" "}
            <button>
              <i class="fas fa-ellipsis-h" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
