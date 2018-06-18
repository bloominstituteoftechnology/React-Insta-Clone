import React from 'react';

const Comment = props => {
    return(
        <div>
            <div className='username'>
            {props.commentInfo.username}
            </div>
            <div className='comment'>
            {props.commentInfo.text}
            </div> 
        </div>
    )
}

export default Comment;