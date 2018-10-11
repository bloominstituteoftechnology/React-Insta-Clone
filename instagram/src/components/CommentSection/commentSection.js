import React from 'react'
import './commentSection.css'
import styled from 'styled-components'

const Comments = styled.div`
    padding-left: 2%;
`
const CommentsText = styled.div`
    margin-bottom: 2%;
`
const CommentFieldContainer = styled.form`
    margin: 2% 0%;
    border-top: 1px solid grey;
    width: 98%;
`
const AddComment = styled.input`
    width: 95%;
    color: grey;
    border: none;
    margin-top: 15px;
`

const CommentSection = props => {
    return (
        <Comments>{props.text.map(text => {
            return <CommentsText>{text.username}: {text.text}</CommentsText>
        })}
        <CommentFieldContainer onSubmit={props.newComment}>
            <AddComment
                 type='text'
                 name='newInput'
                 onChange={props.changeHandler}
                 value={props.newInput} 
                 placeholder='Leave a comment...'
                  />
        </CommentFieldContainer>
        </Comments>
        
    )
}

export default CommentSection;



//<div className='comments'><h4>{props.comment.text}</h4><span>{props.comment.username}</span>