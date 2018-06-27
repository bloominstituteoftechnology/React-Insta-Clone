import React from 'react';
import '../CommentsSection/comments-section.css';

const CommentInput= props => {
    return (
        <div>
            <form onSubmit = {props.addComment}>
                <input
                    onChange={props.commentChangeHandler} 
                    value={props.comment}
                    type="text"
                    placeholder="Add comment" />
                    
            </form>
        </div>
    );
};

export default CommentInput;