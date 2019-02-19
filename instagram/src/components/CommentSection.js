import React from 'react';
import PropTypes from 'prop-types';

function CommentSection (props) {  
    return (
        <div className="comment-section">
        {props.commentData.map(comment => (
            <div key={comment.text}>
                <p><strong>{comment.username}</strong> {comment.text}</p>
            </div>
        ))}
            <input
                type="text"
                placeholder="Add a comment..."
            />
        </div>
    );

};

CommentSection.propTypes = {
    commentData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

CommentSection.defaultProps = {
    commentData: []
};

export default CommentSection;