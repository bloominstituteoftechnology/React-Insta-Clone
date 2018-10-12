import React from  "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'

const CommentText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left:15px;
    margin-top: 5px;
`
const User= styled.span`
    font-weight: bold;
`
const UserComment= styled.span`
    padding-left: 5px;
    font-weight: normal;
    text-align: left;
`    

const Comment = props => {
    return (
        <CommentText>
            <div>
                <User> {props.comment.username}</User>
                {' '}
                <UserComment>{props.comment.text}</UserComment>
                {props.comment.timestamp}
                </div>
        </CommentText>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;
