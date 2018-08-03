import React from 'react';
import './commentsection.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentEl = styled.div`
    margin: 2px 15px;
    width: 75%;
`

const CommentUsername = styled.span`
    margin-right: 5px;
    font-weight: bold;
`

const Comment = (props) => {
    return ( 
        <div className="d-flex justify-content-start">
            <CommentEl><CommentUsername>{props.username}</CommentUsername>{props.text}</CommentEl>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

 
export default Comment;