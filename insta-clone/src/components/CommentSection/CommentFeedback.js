import React from 'react';

const CommentFeedback = props => {
    return (
        <div className="post-feedback-container">
        <div className="feedback-items">
            <div className="right-feedback">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="left-feedback">
                <i className="far fa-bookmark"></i>
            </div>
        </div>
        <div className="like-amout">
            <p>{props.likes} likes</p>
        </div>
        </div>
    );
};

export default CommentFeedback;