import React from 'react';
import './comment.css';

const CommentInputBox = (props) => {
    return (
        <div className = "comment-input">
            <form onSubmit={props.submitComment} > {/* need to accept comment thro' form method and action */}
                <input 
                    
                    onChange = {props.changeComment}
                    type = "text"
                    name = "comment"
                    value = {props.comment}
                    placeholder = "comment... " />
            </form>
        </div>
    )
};

export default CommentInputBox;