import dummyData from "../../dummy-data";
import React, { Component } from 'react';

import styled from 'styled-components'
const Username = styled.h4 `
    font-size: 1.6rem;
`
const UsernameText = styled.p `
    
`

const CommentText = styled.div `
    display:flex;
    align-items: baseline;
`




function PostContainer (props){    
    return (
        <CommentText>
            <Username>{props.comment.username}: </Username>
            <UsernameText>{props.comment.text}</UsernameText>
        </CommentText>
    )      
    
}

export default PostContainer