import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'





const CommentSection = props => {
    return (
        <div className = "comment-section-cont">
            <div>{props.commentInfo.map((comment, id) => {
                
                return <div
                key={id}
                className={comment.username}

                >
                    
                    <div className = "comment-box">
                        <h4 className = "username-comment">{comment.username}</h4>
                        <p className = "username-text">{comment.text}</p>
                    </div>



                </div>
            })}</div>
        </div>
    );
}

CommentSection.propTypes = {
    // postInfo: 
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    }

export default CommentSection