import React from 'react'; 

const CommentSection = props =>{
    return (
        <div class="comment">
            <p>{props.comment.username}</p>

            <p>{props.comment.text}</p>

            <input className="addComment"
                type="text"
                name="newComment"
                placeholder="Add a new comment" 
            />
        </div>
    )
}

export default CommentSection; 