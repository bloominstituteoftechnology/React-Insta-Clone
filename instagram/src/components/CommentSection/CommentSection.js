import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js'

const CommentSection = (props) => {
    return (
        <div>
            {props.postData.comments.map((comment) => {
                return (
                    <Comment comment={comment} key={Math.random()} />
                )
            })}
            <div className='timestamp'>{props.postData.timestamp}</div>
            <div className='add-comment'>
                <form>
                    <input type='text' className='comment-input' placeholder='Add a comment...' />
                </form>
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}

export default CommentSection;