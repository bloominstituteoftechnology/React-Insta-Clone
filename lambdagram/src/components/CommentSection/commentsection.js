import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';

import Comment from './comment';

function CommentSection(props) {
    return (
        <div className='comment-section'>
            {props.comments.map( (comment) => {
                return (
                    <Comment 
                        comment={comment} 
                        key={`${comment.username} - ${Math.round(Math.random() * 10000000000000000)}`} 
                    />
                );
            })}
            <p>{props.timestamp}</p>
            <hr />
            <div className='commenting-stuff'>
                <input 
                    className='comment-box' 
                    name='commentInput' 
                    type='text' 
                    placeholder='Add a comment...' 
                    value={props.commentInput} 
                    onChange={props.handleCommentInput} 
                    onFocus={props.handleCommentInput} 
                    onSubmit={props.handleComment}
                ></input>
                <p>...</p>
            </div>
        </div>
    );
}

CommentSection.propTypes = {
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
    commentInput: PropTypes.string.isRequired, 
    handleCommentInput: PropTypes.func.isRequired,
    handleComment: PropTypes.func.isRequired
}

export default CommentSection;
