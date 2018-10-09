import React from 'react'
import './CommentSection'
import PropTypes from 'prop-types'

const Comments = props => {
    return (
        <div className="comments">
            <div className="user-name">
                {props.comments.username}
            </div>
            <div className="text">
                {props.comments.text}
            </div>
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comments