import React from 'react';

function CommentSection(props) {
    console.log(props);
    return props.comments.map(comment => {
        return (
            <ul>
            <li>{comment.username}</li>
            <li>{comment.text}</li>
            </ul>
            )
    }) 
}
export default CommentSection;