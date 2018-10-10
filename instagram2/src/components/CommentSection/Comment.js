import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="commentary">
            <span className="user-name">{props.comments.username}</span>
            <span className="comment">{props.comments.text}</span>
        </div>
    )
};
Comment.PropTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string,
    }) 
};
export default Comment;

//not this in function??
//comments is array name.  text is actual commment.  dummyData.