import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../CommentSection/Comment';


const CommentSection = props => {
    return <Comment username={props.comments.username} text={props.comments.text} />
        
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default CommentSection;