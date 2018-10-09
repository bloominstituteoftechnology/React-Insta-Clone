import React from 'react';

const Comment = (props) => {
    return (
        <section className="comment">
            <strong>{props.user}</strong> {props.text}
        </section>
    )
}

export default Comment;