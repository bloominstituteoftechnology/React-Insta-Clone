import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes';
import Timestamp from './Timestamp';
import AddComment from './AddComment';

import '../CommentSection/CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <Likes likes={props.likes} />
            {props.comments.map((comment) => {
                return (
                    <div className="comment-content">
                        <h3>{comment.username}</h3>
                        <p>{comment.text}</p>
                    </div>
                );
            })}
            <Timestamp timestamp={props.timestamp} />
            <AddComment />
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