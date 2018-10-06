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

const InputDisplay = styled.div`

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

const CommentInput = () => {
    return ( 
        <div>
            <InputForm>
            <InputDisplay>
                <CommentInputForm type="text" placeholder="Add a comment..." />
                <Ellipsis className="fas fa-ellipsis-h"></Ellipsis>
            </InputDisplay>
            </InputForm>
        </div>
    );
}

export default CommentInput;