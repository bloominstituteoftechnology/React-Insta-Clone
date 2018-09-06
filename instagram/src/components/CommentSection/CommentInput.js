import React from 'react';
import styled, {css} from "styled-components";
import { Form } from 'reactstrap';


const CommentInputForm = styled.input`
    border: 1px solid white;
    border-top: 1px solid lightgrey;
    width: 95%;
    height: 50px;
    text-align: left;
    font-size: 1rem;
    color: grey;
`;

function CommentInput(props) {
    return (
        <Form 
        onSubmit={props.submitHandler}
        >
            <CommentInputForm  
            type="text" 
            placeholder="Add a comment..." 
            onChange={props.changeHandler} 
            value={props.comment} 
        />
        </Form>    
    );
};

 export default CommentInput