import React from 'react';
import dots from '../../images/dots.svg'
import styled from 'styled-components'

const CommentSubmit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px 0px 0px;
    height: 50px;
    width: 97%;
    border-top: 1px solid grey;
    margin-left: 15px;
`

const Form = styled.form`
   width: 90%; 
  
`

const FormInput = styled.input`
    width: 90%;
    height: 50px;
    padding-left: 10px;
    text-align: left;
    border: none;
    
`

const Dots = styled.img`
    width: 20px;
`

const CommentInput = props => {
    return (
        <CommentSubmit>
            <Form onSubmit = {props.submitComment}>
                <FormInput 
                    type = 'text'
                    value = {props.comment}
                    placeholder = 'Add comment...'
                    onChange = {props.changeComment}
                    />
            </Form>
            <Dots className = 'dots' src={dots} alt = 'options for commenting' />
         </CommentSubmit>
        );
};

export default CommentInput;
