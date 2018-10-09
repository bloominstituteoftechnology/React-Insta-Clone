import React from 'react';

const CommentSection = props =>{
    return(
        props.comments.map((comment,index) => {
            return(
                <p key={index}><span>{comment.username}</span>{comment.text}</p>
            )
        })
    )
}

export default CommentSection;