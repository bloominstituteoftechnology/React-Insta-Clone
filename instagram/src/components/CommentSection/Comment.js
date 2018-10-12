import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

const Comment = (props) => {

    if (!props.comment.lenght) {
        console.log('comments are rendering')
    }

    return (
        <div>
            <div className='comments'>
                <div className='user' >{props.comment.username}</div>
                <div className='text' >{props.comment.text}</div>
            </div>
        </div>
    )
}

export default Comment;