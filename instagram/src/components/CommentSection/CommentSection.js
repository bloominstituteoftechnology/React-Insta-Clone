import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <h1>{props.likes}</h1>
            {props.comments.map((comment) => {
                return (
                    <div className="comment-content">
                        <h1>{comment.username}</h1>
                        <p>{comment.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })),
    likes: PropTypes.number
}

export default CommentSection;