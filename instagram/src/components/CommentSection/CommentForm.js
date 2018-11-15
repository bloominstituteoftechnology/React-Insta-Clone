import React from "react";
import './CommentSection.css';


const CommentForm = props => {
    return (
       <form onSubmit={props.addComment}>
            <input 
                className="comment-box" 
                name="inputText"
                type="text" 
                size="40" 
                value={props.inputText}
                placeholder="Add a comment..."
                onChange={props.handleChange}>
            </input> `
        </form>
    )
}

export default CommentForm;