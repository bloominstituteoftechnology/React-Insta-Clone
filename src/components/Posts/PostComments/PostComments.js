import React from 'react';
import '../post.css';

const PostComments = props => {
    return(
        <div className={"commentBox"}>
        <>
        <div className={"commentUser"}>{props.username}</div>
        </>
        <>
        {props.text}
        </>
        </div>
    )
}

export default PostComments