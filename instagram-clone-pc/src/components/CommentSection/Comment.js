import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

const CommentElm = styled.div`
    display: flex;    
    margin: 2px 10px;
    @media (max-width: 1350px){
        width: 85%;
    }
    @media (max-width: 1200px){
        width: 70%;
    }

    @media (max-width: 1000px){
        width: 50%;
    }
`

const CommentUser = styled.span`
    margin-right: 10px;
    font-weight: bold;
`

const Comment = (props) => {
    return (
        <div className="d-flex justify-content-start commentDiv">
            <CommentElm><CommentUser>{props.username}</CommentUser>{props.text}</CommentElm>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;
