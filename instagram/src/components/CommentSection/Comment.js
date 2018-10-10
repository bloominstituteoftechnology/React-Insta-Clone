import React from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div `
    margin: 8px 0;
`

const CommentSpan = styled.span `
    font-weight: bold;
`
function Comment(props) {
    return (
        <CommentDiv>
            <CommentSpan>{props.comment.username}</CommentSpan>- {props.comment.text}
        </CommentDiv>
    )
}

export default Comment;