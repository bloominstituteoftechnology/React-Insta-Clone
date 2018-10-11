import React from 'react';
import styled from 'styled-components';

const CommentSty = styled.div`margin: 10px 10px 0;`;

const Comment = (props) => {
    return (
        <CommentSty>
            <p>
                <strong>{props.comment.username}</strong> {props.comment.text}
            </p>
        </CommentSty>
    );
};

export default Comment;
