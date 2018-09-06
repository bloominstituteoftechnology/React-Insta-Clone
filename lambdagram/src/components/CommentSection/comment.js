import React from 'react';
import PropTypes from 'prop-types';
// import './commentsection.css';
import Styled from 'styled-components';

const AComment = Styled.div`
    margin: 0 auto 5px auto;
`;
const CommentUser = Styled.span`
    font-weight: bold;
`;

function Comment(props) {
    return (
        <AComment>
            <CommentUser>{`${props.comment.username} `}</CommentUser>
            <span>{props.comment.text}</span>
        </AComment>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}

export default Comment;
