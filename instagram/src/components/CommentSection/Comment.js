import React from 'react';

const Comment = props => {
    return(
        <div>
            {props.comments.map(comment => {
                return(
                    <div>
                        <p><strong>{comment.username}</strong> {comment.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Comment;