import React from 'react';
import './CommentSection.css';

function NewComment(props) {
    return <div className="newCommentSection">
        <input className="newcomment" placeholder="Add a comment..." />
        <button>&#xb7;&#xb7;&#xb7;</button>
      </div>;
}

export default NewComment;