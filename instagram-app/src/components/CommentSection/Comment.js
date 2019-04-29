import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';


const Comment = props => {
    return (
        <div className="comment">
            <h4>{props.username}</h4>
            <p>{props.text}</p>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
    

export default Comment;