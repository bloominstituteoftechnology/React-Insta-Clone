import React from 'react';
import './CommentSection.css';

function NewComment(props) {
    return (
        <div className='newCommentSection'>
            <input className='newcomment' placeholder='add a comment...'/>
            <button>...</button>
        </div>
    );
}

export default NewComment;