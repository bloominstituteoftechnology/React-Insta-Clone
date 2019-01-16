import React from "react";
import './PostContainer.css'

const CommentSection = props =>  {
    console.log(props)
    return(
        <div className='comment-container'>
            {props.commentsarray.map(({username, text}, index) => (
        <div className="user-comment">
            <a href="index.html">{username}</a>
            <p>{text}</p>
        </div>
            ))}
        </div>
    )
}

export default CommentSection