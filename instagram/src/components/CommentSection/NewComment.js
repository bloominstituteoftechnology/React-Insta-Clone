import React from 'react';
import './CommentSection.css';

const NewComment = (props) => {
    return (
        <div>
            <div className='add-comment'>
                <form onSubmit={props.newComment}>
                    <input
                        className='comment-input'
                        value={props.text}
                        onChange={props.textInput}
                        placeholder='Add a comment...'
                    />
                </form>
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}

export default NewComment;