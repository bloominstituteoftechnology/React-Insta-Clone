import React from 'react';

const CommentBar=(props)=> {
    return(
        <div className='comment-bar-div'>
        <form onSubmit={props.submitComment}>
            <input className='comment-bar' type='text' placeholder='Add a comment' onChange={props.writeComment}/>
        </form>
        </div>
    );
};

export default CommentBar;