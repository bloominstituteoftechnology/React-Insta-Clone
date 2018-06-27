import React from 'react';
import Comment from './Comment'
import SubmitComment from './SubmitComment'

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <Comment 
                    commentUsername = {comment.username}
                    commentText = {comment.text}
                />
            ))}
            <SubmitComment />
        </div>
    );
}
export default CommentSection;