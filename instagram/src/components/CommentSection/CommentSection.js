import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(a => {
                return (
                    <div>
                        <b>{a.username}</b> {a.text}
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection;