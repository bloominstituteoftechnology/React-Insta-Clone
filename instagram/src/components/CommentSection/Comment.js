import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
            {props.comment.username}
             {props.comment.text}
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;