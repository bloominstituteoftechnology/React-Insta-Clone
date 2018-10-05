import React from 'react';
import '../post.css';

const PostComments = props => {
    return(
        <div className={"commentBox"}>
        <>
        <div className={"commentUser"}>{props.postcommentsusers.username}</div>
        </>
        <>
        {props.postcomments.text}
        </>
        </div>
    )
}

export default PostComments