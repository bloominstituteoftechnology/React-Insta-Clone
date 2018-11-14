import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    console.log(props.username)
    return (
        <div className="comment">
            <p>
                {/* <span className="comment-username">
                {props.post.post.username}</span>
                {props.post.text} */}
            </p>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;