import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p><span className="user">{props.user}</span> &thinsp; {props.text}</p>
        </div>
    );
};

Comment.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string
};

export default Comment;