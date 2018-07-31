import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';


const Comment = props => {
    return (  
        <div>
           <p className="comment"><span className="username">{props.comment.username}</span>{props.comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comments:PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}; 

 
export default Comment;