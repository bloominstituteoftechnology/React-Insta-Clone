import React from 'react';
import styled from 'styled-components';

const InputForm = styled.form`
    border: 1px solid white;
    border-top: 1px solid lightgrey;
    width: 97%;
    height: 40px;
    text-align: left;
    font-size: 15px;
    color: grey;
    margin: 5px 10px;
`;

const CommentInputForm = styled.input`
    width: 96%;
    height: 40px;
    text-align: left;
    font-size: 15px;
    color: grey;
    padding-right: 25px;
    border: white;
`;

const Ellipsis = styled.i`
    color: black;
`;

const CommentInput = props => {
    return ( 
        <div>
            <InputForm onSubmit={props.submitHandler}>           
                <CommentInputForm type="text" placeholder="Add a comment..." value={props.comment} onChange={props.handleChange} />
                <Ellipsis className="fas fa-ellipsis-h"></Ellipsis>
            </InputForm>
        </div>
    );
}

export default CommentInput;