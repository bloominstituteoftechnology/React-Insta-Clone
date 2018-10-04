import React from "react";
 const CommentBox = props =>{
    return (
        <div className="comment-box">
            <input className="input" placeholder="Add A Comment..."></input>
            <span className="dots">...</span>
        </div>
    );
}
 export default CommentBox;