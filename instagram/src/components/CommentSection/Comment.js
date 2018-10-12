import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) =>  {
    return(
        <p><strong>{props.username}</strong> {props.text}</p>
    )
}

Comment.defaultProps    =   {
    username: "Default User",
}

Comment.propTypes   =   {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment
