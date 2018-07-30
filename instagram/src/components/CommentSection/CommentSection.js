import React from 'react';

const CommentSection = props => {
    return(
        <div>
            {props.comments.map((comment,i) =>
                <div key={i}>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </div>
            )}
        </div>
    )
}

export default CommentSection;