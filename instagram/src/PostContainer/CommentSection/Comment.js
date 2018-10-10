import React, {Component} from 'react';
const Comment= prop =>{
    return (prop.comments.map(comment=>{
        return (
            <div className='comment-section'>
                <span className='username'>{comment.username}</span> {comment.text}
            </div>
        )
    }))
        
}
export default Comment;