import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    console.log(props.comments);
    return <div>{props.comments.map(c =>
         <Comment username={c.username} key={Date.now} text={c.text} />
    )}</div>;


    
}

export default CommentSection;