import React from 'react';

const SingleComment = (props) =>{
    return(
        <div className='commentSec'>
            <span className='userName'>{props.user}</span>
            <span className='userComment'>{props.comment}</span>
        </div>
    )
}

export default SingleComment
