import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    return (
        <div>
            <Comment
                passedUser={props.postUser}
                passedText={props.postComments}
            />
        </div>
    )
}

export default CommentSection;