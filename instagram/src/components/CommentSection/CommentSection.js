import React from 'react';
import Comment from './Comments';


const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => {
                return <Comment comment = {comment} />
            })}
        </div>
    )

}

export default CommentSection;