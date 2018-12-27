import React from "react";
import PropTypes from "prop-types";
import Comment from './Comment'
import './CommentSection.css'

const CommentSection = props => {
    console.log("CommentSection: ", props.comments)
    return (
        <div className='comment-section-style'> CommentSection
            {props.comments.map(comment => (
                <Comment username={comment.username}
                         text={comment.text}
                         key={comment.text}
                />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;
