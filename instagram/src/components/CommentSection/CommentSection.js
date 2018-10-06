import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js'
import NewComment from './NewComment.js';
import Buttons from './Buttons.js';

const CommentSection = (props) => {
    return (
        <div>
            <Buttons postData={props.postData} />
            {props.postData.comments.map((comment) => {
                return (
                    <Comment comment={comment} key={Math.random()} />
                )
            })}
            <div className='timestamp'>{props.postData.timestamp}</div>
            <NewComment />
        </div>
    )
}

export default CommentSection;