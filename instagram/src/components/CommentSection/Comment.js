import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";

const CommentText = styled.div`
    display: flex;
    padding: 5px 0;
    height: auto;
`;

const User = styled.span`
    font-weight: bold;
    padding-left: 15px;
    width: auto;
    text-align: left;
`;

const CommentOnPost = styled.span`
    text-align: left;
    padding-left: 5px;
`;

function Comment(props) {
    return (
        <CommentText>
            <User>{props.comment.username}</User>
            <CommentOnPost>{props.comment.text}</CommentOnPost>
        </CommentText>
    );
};
 
Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

 export default Comment;