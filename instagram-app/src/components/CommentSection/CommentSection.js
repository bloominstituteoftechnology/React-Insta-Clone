import React from 'react'; 
import Comment from './Comment'; 

const CommentSection = props =>{
    return (
        <div>
            <Comment 
                username={props.comment.username}
                commentText={props.comment.text}
            /> 

            <input className="addComment"
                type="text"
                name="newComment"
                placeholder="Add a new comment" 
            />
        </div>
    )
}

export default CommentSection; 