import React from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
    return(
        <div>
            {props.comments.map(comment => {
                return(
                    <Comment comment={comment.text} username={comment.username}/>
                );
            })}
        </div>
    );
}
export default CommentSection;