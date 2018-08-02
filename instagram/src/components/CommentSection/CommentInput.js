import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <form className="comment-input" onSubmit={ props.submitComment }>
            
            <input
                onChange={ props.changeComment }
                value={ props.comment }
                type="text" 
                placeholder="Add a comment..." 
                className="custom-input"
            />
        </form>
    );
}

export default CommentSection;