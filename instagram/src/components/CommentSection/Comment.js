import React from 'react';
// import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    return (
        <div>
            <p className = 'commentUser'>{props.comment.username}</p>
            <p className = 'commentText'>{props.comment.text}</p>
        </div>
    )
}

// Comment.propTypes = {
//     comment: PropTypes.shape({
//         text: PropTypes.string,
//         username: PropTypes.string,
//     })
// }

export default Comment;