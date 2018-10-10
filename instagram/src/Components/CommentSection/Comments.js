import React from 'react'
import './CommentSection.css'
import PropTypes from 'prop-types'

const Comments = props => {
    return (
        <div className="comments">
            <p>
                {props.comments.username}<span className="text">{props.comments.text}</span>
            </p>
            
        </div>
    )
}

// Comment.propTypes = {
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             username: PropTypes.string,
//             text: PropTypes.string
//         })
//     ).isRequired
// }

export default Comments