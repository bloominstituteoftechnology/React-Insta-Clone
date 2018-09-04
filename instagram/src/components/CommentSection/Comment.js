import React from 'react';
import PropTypes from 'prop-types';
import CommentLikes from './CommentLikes';

const Comment = props => {
    return (
        <div className = 'comment-container'>
            <CommentLikes likes={props.likes} />

            <span className = 'user'>
                {props.comment.username}
            </span>
            
            {' '}
            
            <span className = 'comment'>
                {props.comment.text}
            </span>
            
            
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}


export default Comment;