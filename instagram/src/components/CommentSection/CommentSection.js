import React from 'react';

const CommentSection = props => {
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

export default CommentSection;