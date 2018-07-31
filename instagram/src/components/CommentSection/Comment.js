import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
    return (  
        <div>
           <p className="comment"><span className="username">{props.comments.username}</span>{props.comments.text}</p>
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