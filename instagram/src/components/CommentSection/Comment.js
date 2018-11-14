import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

function Comment(props) {
    return (
        <div className="comment">
            <p>
                <span>
                    {props.comment.username}
                </span>
                {props.comment.text}
            </p>
        </div>
    );
}

export default Comment;