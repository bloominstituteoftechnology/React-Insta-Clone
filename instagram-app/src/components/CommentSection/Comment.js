import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
    return (
        <div
            className='comment'>
            <h5>{props.comment.username}</h5>
            <span>
                {props.comment.text}
            </span>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};
