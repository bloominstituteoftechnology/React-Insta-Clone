import React from 'react';
 
function CommentFeedback(props) {
    return (
        <div className="feedback-container">
            <div className="feedback-items">
                <div className="left-icons">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <div className="right-icons">
                    <i className="far fa-bookmark"></i>
                </div>
            </div>
            <div className="like">
                <p>{props.likes} likes</p>
            </div>
        </div>
    );
};

 export default CommentFeedback;