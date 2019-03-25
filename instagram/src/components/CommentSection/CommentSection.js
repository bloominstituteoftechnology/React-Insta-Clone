import React from 'react';
import PropTypes from 'prop-types'
import './commentSection.scss';

const CommentSection = props => {
    return (
        <p className='commentContent'>
            <span className='commentUsername'>{props.comment.username}</span>
            {props.comment.text}
        </p>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;