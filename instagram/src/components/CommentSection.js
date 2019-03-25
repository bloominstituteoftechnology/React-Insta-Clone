import React from 'react';
import Comments from './Comments'

const CommentSection = props => {
    return (
    <div>
    {props.comments.map((comment, index) =>
    <Comments 
        username={comment.username} 
        key={index} 
        text={comment.text} 
        likes={comment.likes}
    />
    )}
    </div>    
    );
}


export default CommentSection;