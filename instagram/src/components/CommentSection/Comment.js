import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div>
            <h2>{props.thisComment.username}</h2> 
            <p>{props.thisComment.text}</p> 
        </div>
    );
}

Comment.propTypes = {
    thisComment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;