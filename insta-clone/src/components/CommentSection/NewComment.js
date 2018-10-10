import React from 'react';
import './CommentSection.css';

function NewComment(props) {
    return <div className="newCommentSection">
        <form onSubmit={(event) => {props.addComment(event, props.postIndex)}}>
            <input
                className="newcomment"
                name='newComment'
                placeholder="Add a comment..."
                value={props.newComment}
                onChange={props.changeHandler}
            />
        </form>
        <button onClick={props.addComment}>&#xb7;&#xb7;&#xb7;</button>
      </div>;
}

export default NewComment;