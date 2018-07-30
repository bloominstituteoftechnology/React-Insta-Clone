import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return(
    <div>
    {props.commentsArray.map(comment => <Comment username={comment.username}/>)}
    </div>
    );
   }



 
export default CommentSection;