import React from 'react';

function CommentInput(props) {
    return (
        <form>
            <input
              type = "text"
              name = "comment"
              placeholder = "Add a comment..."
            />
        </form>
      );
}

export default CommentInput;