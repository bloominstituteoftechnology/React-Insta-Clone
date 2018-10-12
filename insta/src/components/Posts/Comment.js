import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <>
            <p><span style={{fontWeight: "bold"}}>{props.comment.username}</span> {props.comment.text}</p>
        </>
    );
};

//Test
Comment.propTypes = {
    comment: PropTypes.object
};

export default Comment;