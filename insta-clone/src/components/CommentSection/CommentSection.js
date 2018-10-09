import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css'

const CommentSection = props => {
    console.log(props.comments)
    return (
        props.comments.map((comment, index) => {
            return (
                <div key={index + 1} className='commentSection'>
                    <Comment comment={comment} />
                </div>
            )
        })
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentSection;