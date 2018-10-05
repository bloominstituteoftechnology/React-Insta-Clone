import React from 'react';
import '../post.css';


const PostCommentForm = props => {
    return(
        <div className={"commentInputForm"}>
        <input className={"addACommentInput"} type="text" placeholder="Add a omment..."></input>
        </div>
    )
}


export default PostCommentForm