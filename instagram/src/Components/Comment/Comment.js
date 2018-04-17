import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className='comment'>
            {props.user}: {props.note}
        </div>
    )
}

export default Comment;