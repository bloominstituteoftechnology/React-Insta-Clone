import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'

const CommentSection = props => {
    return (
    <Comment text={props.text} username={props.username} />
    )}

CommentSection.propTypes = {
 comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
 })   
}

export default CommentSection;
