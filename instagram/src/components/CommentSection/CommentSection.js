import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div class="comment-section">
        {props.dummyData.map(comment => {
            <ul>
               <Comment key={comment.timestamp} 
                username={comment.username}
                text={comment.text}/>
                </ul>
            })}
            </div>
    );
};

export default CommentSection;