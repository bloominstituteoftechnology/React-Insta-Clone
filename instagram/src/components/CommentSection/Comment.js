import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { throws } from 'assert';

const CommentContainer = styled.div`
    text-align: left;
    font-size: 14px;
    padding: 10px;
    margin: 0;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .comment-text {
        width: 70%;
    }

    p {
        margin: 0;
    }

    .delete-comment {
        cursor: pointer;
        border: 1px solid black;
        display: inline-block;
        padding: 2px 10px;
        border-radius: 5px;
    }
`

const Comment = (props) => {
    return (
        <CommentContainer  >
            <div className="comment-text">
                <p><strong>{props.thisComment.username}</strong> {props.thisComment.text}</p> 
            </div>
            <div className={`delete-comment`}onClick={props.onClick} data-index={props.index}>Delete Comment</div>
        </CommentContainer>
    );
}


Comment.propTypes = {
    thisComment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;