import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
    return(
        <div>


        <div className='add-comment-bar'>
            <form
            onSubmit={props.addNewComment}
            className='form'
            >
                <input
                className='add-comment'
                type='text'
                placeholder='Add a comment...'
                onChange={props.changeHandler}
                name='newComment'
                value={props.newComment}
                >
                </input>
            </form>

            <div className='post-extras'>
                <div id='three-dots'></div>
            </div>
            </div>
        </div>
    )
}

export default CommentInput;
