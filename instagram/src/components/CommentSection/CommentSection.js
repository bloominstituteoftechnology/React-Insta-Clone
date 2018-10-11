import React from 'react';
import Comments from './Comments';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => {
                return <Comments comments = {comment} />
            })}
        </div>
    )
}

export default CommentSection;