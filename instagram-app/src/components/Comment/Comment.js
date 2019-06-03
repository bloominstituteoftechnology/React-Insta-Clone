import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const comment = (props) => {
    const { username, text } = props.comment;
    return (
        <div className='comment'>
            <p><strong>{username}</strong> {text}</p>
        </div>
    )
}

comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default comment;