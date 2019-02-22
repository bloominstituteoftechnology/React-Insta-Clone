import React from "react";
import styled from "styled-components";

const Form = styled.form`
    border-top: 2px solid lightgrey;
    margin-top: 15px;
`
const Input = styled.input`
    display: inline-flex;
    width: 94%;
    border: none;
    height: 35px;
`
const Elipse = styled.span`
    display: inline-flex;
    font-size: 30px;
    width: 5%;
    height: 20px;
`
//comment box presents the "add comment" section for each post
const CommentBox = props =>{
    return (
        <Form 
            onSubmit={(event) => {
                event.preventDefault();
                props.add()
            }}>
            <Input  
                value={props.text}
                className="input" 
                placeholder="Add A Comment..."
                maxLength="100"
                onChange={props.input}
                // onKeyDown={(event) => {
                //     if (event.keyCode === 13) {
                //         event.preventDefault()
                //         props.add()
                //     }
                // }}
            >
            </Input>
            <Elipse>...</Elipse>
        </Form>
    );
}

export default CommentBox;