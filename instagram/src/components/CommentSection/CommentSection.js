import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    return (
        // <div>
        //     {props.post.comments.map (comment => (
        //         <Comment comment = {comment}/>
        //     ))}
        // </div>
        <div>
            {props.comments.map (comment => (
                <Comment 
                    commentUsername = {comment.username}
                    commentText = {comment.text}
                    comment = {comment}
                />
            ))}
        </div> 
    );
}
export default Comment;