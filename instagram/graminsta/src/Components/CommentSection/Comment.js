import React, {Component} from "react"
import "./CommentSection.css"
import PropTypes from "prop-types"

const Comment = props => {
    return (
        <div>
            <span className="userNameComment">{props.username}</span>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;