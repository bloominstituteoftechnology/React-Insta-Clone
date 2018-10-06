import React from 'react';

const SingleComment = (props) =>{
    return(
        <div>
            <span>{props.user}</span>
            <span>{props.comment}</span>
        </div>
    )
}

export default SingleComment

// {props.post.comments.map(item =>{
//     return(
//     <CommentSection key={item.text} comments={item.text} user={item.username} />
//     )
// })}