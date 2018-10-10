import React from 'react';
import './CommentSection.css';

function NewComment(props) {
    return <div className="newCommentSection">
        <input
            className="newcomment"
            name='newComment'
            placeholder="Add a comment..."
            value={props.newComment}
            onChange={props.changeHandler}
        />
        <button>&#xb7;&#xb7;&#xb7;</button>
      </div>;
}

export default NewComment;