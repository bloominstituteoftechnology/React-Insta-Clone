import React from 'react';
import './CommentSection.css';

const NewComment = (props) => {
    return (
        <div>
            <div className='add-comment'>
                <form onSubmit={props.newComment}>
                    <input
                        onChange={props.textInput}
                        type='text'
                        className='comment-input'
                        placeholder='Add a comment...'
                    />
                </form>
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}

export default NewComment;