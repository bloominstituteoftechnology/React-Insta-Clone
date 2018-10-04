import React from 'react';
import styled from 'styled-components';

const CommentInputForm = styled.input`
    border: 1px solid white;
    border-top: 1px solid lightgrey;
    width: 94%;
    height: 40px;
    text-align: left;
    font-size: 15px;
    color: grey;
    margin: 10px 0;
`;

const CommentInput = () => {
    return ( 
        <div>
            <form>
                <CommentInputForm type="text" placeholder="Add a comment..." />
            </form>
        </div>
    );
}

export default CommentInput;