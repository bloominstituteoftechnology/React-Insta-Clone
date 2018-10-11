import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentElm = styled.div`
    margin: 2px 10px;
    width: 80%;
`

const CommentUser = styled.span`
    margin-right: 10px;
    font-weight: bold;
`

const Comment = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <CommentElm><CommentUser>{props.username}</CommentUser>{props.text}</CommentElm>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;
