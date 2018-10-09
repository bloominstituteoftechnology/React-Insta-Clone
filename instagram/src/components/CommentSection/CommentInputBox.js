import React from 'react';
import './comment.css';

const CommentInputBox = (props) => {
    return (
        <div className = "comment-input">
            <form> {/* need to accept comment thro' form method and action */}
                <input type = "text" placeholder = "comment... " />
            </form>
        </div>
    )
};

export default CommentInputBox;