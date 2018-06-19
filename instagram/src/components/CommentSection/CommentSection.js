import React from 'react';

const CommentSection = props => {
    return (
        <div>
            {props.commentInfo.map(comment => 
                <div key={Math.random(Date.now())}>
                    {comment.username} {comment.text}<br />
                </div>
            )}
        </div>
    );
}

export default CommentSection;