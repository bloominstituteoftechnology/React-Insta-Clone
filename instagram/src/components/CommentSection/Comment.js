import React from 'react';
import PropTypes from 'prop-types';

const Comment = props =>{
    console.log("comment props", props);
    return(
        <div className="comments-section">
            <div className="comments">
                <p className="user">{props.comment.username}</p>
                <p className="comment">{props.comment.text}</p> 
            </div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;