import React from 'react';
import './comment.css';

const CommentInputBox = (props) => {
    return (
        <div className = "comment-input">
            <form onSubmit={props.addNewComment} > {/* need to accept comment thro' form method and action */}
                <input 
                    onChange = {props.commentHandler}
                    type = "text"
                    name = "comment"
                    value = {props.value}
                    placeholder = "comment... " />
            </form>
        </div>
    )
};

export default CommentInputBox;