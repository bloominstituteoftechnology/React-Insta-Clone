import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css'

const Comment = (props) => {
    return ( 
        <div>
            <p className="comment"><span className="username">{props.username}</span>{props.text}</p>
        </div>
    );
}


 
export default Comment;