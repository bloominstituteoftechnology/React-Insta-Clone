import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js'

const CommentSection = props =>{
    return(<React.Fragment>
    <div>{props.comment.username}</div>
    <div>{props.comment.text}</div>
    </React.Fragment>   )
    }

export default CommentSection;