import React from 'react';
import Comment from './Comment'
import './CommentSection.css';

const CommentSection = props => {
    return (

        <div className="comment-section">
            <div className="likes">
                <p>{props.likes} likes</p>
            </div>

            {props.comments.map(comment => {
                return <Comment 
                username={comment.username} 
                text={comment.text}
                />
            }
            )}

        </div>
        
    )
}

export default CommentSection;