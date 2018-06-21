import React from "react";

const CommentFormContainer = props => {
  return (
    <div>
      <div className="add-comment-container">
        <input
          type="comment"
          class="form-control-lg add-comment-form"
          id="addComment"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
};

export default CommentFormContainer;
