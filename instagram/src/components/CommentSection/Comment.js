import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { throws } from 'assert';

const CommentContainer = styled.div`
    text-align: left;
    font-size: 14px;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .comment-text {
        width: 90%;

        p {
            margin: 0;
            padding: 0;
        }
    }

    .delete-comment {
        cursor: pointer;
        border: 1px solid black;
        display: inline-block;
        padding: 0 5px;
        border-radius: 5px;
    }

    .hide {
        display: none;
    }
`

const Comment = (props) => {
    return (
        <CommentContainer  >
            <div className="comment-text">
                <p><strong>{props.thisComment.username}</strong> {props.thisComment.text}</p> 
            </div>
            <div className={`delete-comment ${props.thisComment.username === localStorage.getItem('userName') ? null : 'hide'}`}
                onClick={props.onClick} data-index={props.index}>X</div>
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