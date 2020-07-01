import React from 'react';
import PropTypes from 'prop-types';

const comment = (props) => {
    const { username, text } = props.comment;
    console.log(props.comment);
    return (
        <div className='comment'>
            <h3>Username: {username}</h3>
            <p>Comment: {text}</p>
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