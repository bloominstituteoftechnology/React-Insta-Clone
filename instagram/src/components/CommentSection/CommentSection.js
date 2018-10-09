import React from 'react'

const CommentSection = props => {
    const {
        username,
        text,
      } = props.commentInfo;

    return (
        <div className="postedCommentContainer">
            <h1 className="userName">{username}</h1>
            <p className="commentText">{text}</p>
        </div>
    )
}

export default CommentSection;