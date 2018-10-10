import React from 'react';


const Comment = props => {
    return(
    <div className='comment-content'>

        <div className='comment-username'>
        {props.comment.username}
        </div>
        <div className='comment-text'>
        {props.comment.text}
        </div>

        {/* <div className='time-stamp'>
        {props.timestamp}
        </div> */}

        </div>
    );
}

export default Comment;