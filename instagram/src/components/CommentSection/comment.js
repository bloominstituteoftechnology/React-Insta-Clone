import React from 'react';
import './commentsection.css'
import PropTypes from 'prop-types';

const Comment = (props) => {
    return ( 
        <div className="d-flex align-items-center">
            <div className="comment"><span className="username">{props.username}</span>{props.text}</div>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

 
export default Comment;