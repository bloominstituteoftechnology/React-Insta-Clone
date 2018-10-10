import React from 'react'

const CommentInput = props => {
    return (
        <form onSubmit={props.submit}>
            <section className="comment-area">
            <input className="comment-box" type="text" value={props.comment} onChange={props.change} placeholder="Add comment..." />
            </section>
        </form>
    )
}

export default CommentInput