import React from 'react';
import styled from 'styled-components';

const CommentContent = styled.div`
    margin: 15px 0;
`;

const CommentContentH3 = styled.h3`
    font-weight: 900;
    display: inline-block;
    margin-right: 10px;
`;

const CommentContentP = styled.p`
    font-weight: 400;
    display: inline-block;
`;

const Comments = props => {
    return (
        (props.comments || []).map((comment, index) => {
            return (
                <CommentContent key={index}>
                    <CommentContentH3>{comment.username}</CommentContentH3>
                    <CommentContentP>{comment.text}</CommentContentP>
                </CommentContent>
            )
        })
    );
}

export default Comments;