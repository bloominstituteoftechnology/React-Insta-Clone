import React from 'react';
import Comment from './Comment';
import PropTypes from "prop-types";

const CommentSection = (props) => {
    return (
        <>
            <Comment />
            <input placeholder="Add a comment..."/>
        </>
    )
}

export default CommentSection;