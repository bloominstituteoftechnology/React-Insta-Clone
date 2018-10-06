import React from 'react';
import './Comment.css';

//receives individual comment from CommentSection
const Comment = ({comment}) =>{
    return (

        <div>
            <p><span className="username">{comment.username}</span>&#160;{comment.text}</p>
        </div>
    )

}


export default Comment;