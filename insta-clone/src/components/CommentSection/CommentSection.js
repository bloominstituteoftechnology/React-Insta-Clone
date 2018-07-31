import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => {
                return (
                    <div className="comment" key={comment.text + comment.username} onClick={props.deleteComment} >
                        <p className="username">{comment.username}</p>
                        <p className="text">{comment.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    }))
}

export default CommentSection;