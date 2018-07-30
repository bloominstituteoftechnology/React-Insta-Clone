import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';

const CommentList = (props) => {
    
    return (
        <div className="comment-list-container">
        {
            props.comments.map((comment)=>{
                    return <Comment key={comment.username} comment={comment}/>
            })
        }
        </div>
    )
}

CommentList.propTypes = {
    comment: PropTypes.array, 
}

export default CommentList;