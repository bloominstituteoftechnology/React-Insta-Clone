import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    return (
        <div>
            Comment Section!!!!!!!!!!!!!!
            {props.post.comments.map (comment => (
                <Comment comment = {comment}/>
            ))}
        </div>
    );
}
export default Comment;