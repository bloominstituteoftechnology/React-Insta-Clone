import React from 'react';
import styled from "styled-components";
import './CommentSection.css'

const Comments = styled.div`
    display: flex;
    padding: 1%;
`;

const P = styled.p`
    padding-left: 1%;
`;

// Outputs a comment
function Comment(props) {
    return (
        <Comments>
            <strong><P>{props.data.username}</P></strong><P>{props.data.text}</P>
        </Comments>
    )
}

export default Comment;