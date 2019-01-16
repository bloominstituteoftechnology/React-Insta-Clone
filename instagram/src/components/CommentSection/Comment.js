import React from 'react'
import PropTypes from 'prop-types';
import './CommentSection.css'

const Comment = props => {
    return (
        <ul className = "comment-container">
        <li className = "comm-flex" key={props.comment.index}>
          <h5 className= "comm-name">{props.comment.username}</h5>
          <p className = "comm-text">{props.comment.text}</p>
        </li>
        </ul>
    )
}


export default Comment

Comment.PropTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

