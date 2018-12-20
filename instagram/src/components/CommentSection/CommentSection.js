import React from 'react';
import AddComment from './AddComment';

const CommentSection = props => {
    return (
        <div>
            <div>
                <b>{props.comment.username} </b> {props.comment.text}
            </div>
                <AddComment />
        </div>
    )
}

export default CommentSection;
