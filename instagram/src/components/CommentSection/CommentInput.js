import React from 'react';
import './CommentSection.css';


const CommentInput = (props) => {
    return (
        <div className='comment-field'>
            <form >
                <input
                    className='comment-input'
                    name='commentInput'
                    value={props.commentInput}
                    type='text'
                    placeholder='Add a comment... '
                    onChange={props.handleChange}
                />

                <button type='submit' onClick={props.addComment} >Add Comment</button>
            </form>
            <i className="fas fa-ellipsis-h fa-1x"></i>
        </div>
    );
}

export default CommentInput;