import React from 'react';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    justify-content: space-between;
`;

const TextInput = styled.input`
    width: 80%;
    border: none;
    :focus{
        outline: none;
    }
`;

const Expand = styled.p`
    font-weight: bold;
    letter-spacing: 1.5px;
    font-size: 25px;
`;
const CommentInput =props =>{
    return (
        <Form onSubmit={props.addNewComment}>
            <TextInput
            type="text" 
            placeholder="Add a comment..."
            value={props.inputText}
            onChange = {props.handler}
            
            />
            <Expand>...</Expand>
        </Form>
    )
}

export default CommentInput