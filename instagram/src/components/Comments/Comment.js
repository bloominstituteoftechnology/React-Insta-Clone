import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return(
        <div className="comments">
            <div className="commentsText"> <p><span>{props.comments.username}</span>{props.comments.text}</p></div>
        </div>
    )
}

Comment.propTypes = {
        username: PropTypes.array.string,
        text:PropTypes.string
};

export default Comment;