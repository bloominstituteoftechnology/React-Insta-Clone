import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(comment => {
                return (
                    <div>
                    <div style={{fontWeight: 'bold'}} key={(comment.username, comment.timestamp)}>
                        {comment.username} {/* !! username should have heavier weight, can use Post__heading css? */}
                    </div><div>
                        {comment.text}
                    </div>
                    </div>
                )
            })}
        </div>
    )
};

export default CommentSection;