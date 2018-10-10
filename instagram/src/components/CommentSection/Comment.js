import React from 'react';
import PropTypes from 'prop-types';

const Comment = props =>{
    return(
        <div className="comments-section">
            <div className="comments">
                <p className="user">{props.username}</p>
                <p className="comment">{props.comment}</p>
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