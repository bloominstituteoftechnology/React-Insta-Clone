import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CommenterName = styled.span`
    font-weight: bold;
    padding-right: 10px;
`;

const UserComment = styled.div`
    text-align: left;
    padding-bottom: 10px;
`;

const Comment= (props) => {
    return (
        <UserComment>
            <CommenterName>{props.comment.username}</CommenterName>
           <span className='comment-body'>{props.comment.text}</span>{''}
        </UserComment>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;