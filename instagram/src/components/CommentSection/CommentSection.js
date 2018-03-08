import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(comment => {
                return (
                    <div>
                        {comment.username} {/* !! username should have heavier weight, can use Post__heading css? */}
                        {comment.text}
                    </div>
                )
            })}
        </div>
    )
};

export default CommentSection;