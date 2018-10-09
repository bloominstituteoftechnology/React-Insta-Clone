import React from 'react';

import './CommentSection.css';




const Comments = props =>{
    return(
        <div className='comments'>
        <h3 className='usercomment'>{props.comments.username} </h3> 
        <p className='postcomment'>{props.comments.text}</p>
        
        </div>
    )
}

export default Comments;