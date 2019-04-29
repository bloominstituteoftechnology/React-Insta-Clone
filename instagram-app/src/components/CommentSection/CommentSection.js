import React from 'react'; 

const CommentSection = props =>{
    return (
        <div class="comment">
            <p>{props.comment.username}</p>

            <p>{props.comment.text}</p>
        </div>
    )
}

export default CommentSection; 