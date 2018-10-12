import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

const AddComment = styled.div`
    border-top: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin: 0 2%;


    form {
        width: 100%;
    }

    .comment-input {
        border: grey;
        width: 100%;
        text-align: left;
    }

    .fa-ellipsis-h:hover {
        cursor: pointer;
    }
`

const NewComment = (props) => {
    return (
            <AddComment>
                <form onSubmit={props.newComment}>
                    <input
                        className='comment-input'
                        value={props.text}
                        onChange={props.textInput}
                        placeholder='Add a comment...'
                    />
                </form>
                <i className="fas fa-ellipsis-h"></i>
            </AddComment>
    )
}

export default NewComment;