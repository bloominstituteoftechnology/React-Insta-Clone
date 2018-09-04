import React from 'react';

const CommentBar=(props)=> {
    return(
        <div className='comment-bar-div'>
        <form>
            <input className='comment-bar' type='text' placeholder='Add a comment'/>
        </form>
        </div>
    );
};

export default CommentBar;