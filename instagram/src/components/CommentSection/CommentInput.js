import React from 'react';
import styled from 'styled-components';

/*
Passed as props from CommentSection.js

key={i} 
user={c.username} 
text={c.text}

*/
// Styles using styled-components 
const CommentContainer = styled.div`
    width: 100%;
    border-top: 1px solid #e6e6e6;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`
const Img = styled.img`
    width:  20px;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
`

const CommentInput = props => {
    return (
        <CommentContainer>

        <form onSubmit={props.handleAddComment}>

            <Input onChange={props.handleChange} value = {props.comment} type="text" placeholder="Add a comment..."/>

        </form>
            <Img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt="more options"></Img>
    </CommentContainer>  
    )
}

export default CommentInput