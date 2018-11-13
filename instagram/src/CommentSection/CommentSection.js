import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <div className='individual-comment'>
                <p><span>{comment.username}</span> {comment.text}</p>
                </div>
            ))}
        </div>
    );
}

CommentSection.propTypes = {
    props: PropTypes.shape({
        comments: PropTypes.array.isRequired,
    })
}

export default CommentSection;