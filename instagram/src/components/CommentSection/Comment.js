import React from 'react';


const Comment = props => {
    return (
        <div>
            {props.post.comments.map(comment => (
                comment.username + comment.text
            ))}
        </div>
    );
}
export default Comment;