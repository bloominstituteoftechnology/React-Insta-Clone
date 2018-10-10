import React, {Component} from 'react';
const Comment= prop =>{
    return (
        <div className='comment-section'>
            <span className='username'>{prop.username}</span> {prop.text}
        </div>
    )
}
export default Comment;