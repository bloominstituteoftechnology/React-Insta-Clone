import React from 'react';

import './CommentSection.css'
import PropTypes from "prop-types";

function Comment(props) {
    return(
        
        <div className="user-comment" >
            <p className="user" >
                {props.username}
            </p>
            <p className="body">
                {props.text}
            </p>
            
        </div>
        
       
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;