import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentText = styled.div`
    text-align: left;
    padding: 4px;
    margin-left: 6px;
    `;

const UserName = styled.span`
    font-size: 12px;
    font-weight: bold;
    `;

const Comments = styled.span`
    font-weight: 300;
    font-size: 14px;
    `;


const Comment = props => {
    return (
        <CommentText>
        <UserName>{props.comment.username} </UserName>
        <Comments>{props.comment.text}</Comments>{' '}
      </CommentText>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;