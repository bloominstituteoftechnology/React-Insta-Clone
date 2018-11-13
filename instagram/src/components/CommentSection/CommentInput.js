import React from 'react';
import './CommentSection.css';


const CommentInput = () => {
    return (
        <div className='comment-field'>
            <form >
                <input
            
                    className='comment-input'
                    type='text'
                    placeholder='Add a comment... '
                />
            </form>
            <i className="fas fa-ellipsis-h fa-1x"></i>
        </div>
    );
}

export default CommentInput;