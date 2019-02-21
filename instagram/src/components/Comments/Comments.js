import React from 'react'
import './Comments.css'
import Container from 'react-bootstrap/Container'


const Comment = (props) => {
    return (
        <Container className='comment'>
            <strong>{props.commentData.username}</strong> {props.commentData.text}
        </Container>
    )
}


export default Comment