import React from 'react';

const CommentSection = (props) => {
    console.log(props.comments);
    return (
        <div>
            {props.comments.map(a => {
                console.log(a);
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