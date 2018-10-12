import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

const Comments = styled.div`
    display: flex;
    margin: 10px 2%;


    .user {
        font-weight: bold;
        margin-right: 1%;
    }

    .user:hover {
        cursor: pointer;
    }
`

const Comment = (props) => {

    if (!props.comment.lenght) {
        console.log('comments are rendering')
    }

    return (
            <Comments>
                <div className='user' >{props.comment.username}</div>
                <div className='text' >{props.comment.text}</div>
            </Comments>
    )
}

export default Comment;