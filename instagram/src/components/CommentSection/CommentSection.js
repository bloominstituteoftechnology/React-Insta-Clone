import React from 'react'
import PropTypes from 'prop-types'

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

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default CommentSection;