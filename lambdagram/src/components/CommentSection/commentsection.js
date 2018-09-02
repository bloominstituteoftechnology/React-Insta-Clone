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
            <input name='commentInput' type='text' value={props.commentData} onChange={props.commentHandler} />
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    commentData: PropTypes.string, 
    commentHandler: PropTypes.func
}

export default CommentSection;
