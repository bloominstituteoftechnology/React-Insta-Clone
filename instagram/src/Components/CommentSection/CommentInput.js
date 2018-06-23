import React from 'react';

const CommentInput = (props) => {
    return (
        <div>
            <form onSubmit ={props.handleCommentSubmit}>
                <input
                type ="text"
                placeholder = "add comments"
                onChange ={props.changeComment}
                value ={props.comment} />
            </form>
        </div>
    );
};

export default CommentInput;