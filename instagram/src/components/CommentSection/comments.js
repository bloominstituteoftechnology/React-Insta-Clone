import React from 'react';
import PropTypes from 'prop-types';


const Comments = props => {
    return(
        <div className="comment-container">
        <p className="comment"><span className="comment-usr">{props.comment.username}</span> <span className="comment-text">{props.comment.text}</span></p>
        </div>
    );
    
}

export default Comments;


Comments.propTypes ={
    username: PropTypes.string,
    text: PropTypes.string
}