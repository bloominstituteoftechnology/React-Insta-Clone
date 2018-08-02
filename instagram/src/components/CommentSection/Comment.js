import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";
import { UserName } from '../Styling';

const Comment = props => {
    return (
        <div> 
            <UserName margin >{props.comment.username} </UserName>
            <span> {props.comment.text}</span>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;