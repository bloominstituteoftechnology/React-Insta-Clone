import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js'

const CommentSection = props =>{
    return(<React.Fragment>
        <div class="container-style">
    <div class="username-style">{props.comment.username}</div>
    <div class="text-style">{props.comment.text}</div>
    </div>
    </React.Fragment>   )
    }

export default CommentSection;