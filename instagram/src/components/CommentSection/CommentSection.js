import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return(
    <div>
    {props.comments.map(comment => <Comment comments={comment}/>)}
    </div>
    );
   }



 
export default CommentSection;