import React from 'react';
import Comment from "./Comment"

const CommentSection = props => {
    return(
        <div>
         <Comment comments={props.comments} />
        </div>
    );
}

export default CommentSection;