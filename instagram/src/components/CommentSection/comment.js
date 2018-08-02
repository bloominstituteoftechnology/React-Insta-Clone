import React from 'react';
import './commentsection.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentEl = styled.div`
    margin: 2px 15px;
`

const CommentUsername = styled.span`
    margin: 0 5px;
    font-weight: bold;
`

const Comment = (props) => {
    return ( 
        <div className="d-flex align-items-center">
            <CommentEl><CommentUsername>{props.username}</CommentUsername>{props.text}</CommentEl>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

 
export default Comment;