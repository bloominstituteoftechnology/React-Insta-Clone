import React from 'react';
import AddComment from './AddComment';

const CommentContainer = props => {
    console.log(props.comments)
    return (
        <div>
            {props.comments.map((comment, index) => {
                return <div key={index}><p><strong>{comment.username}</strong> {comment.text}</p></div>
            })}

            <AddComment />
        </div>


    );
}

export default CommentContainer;