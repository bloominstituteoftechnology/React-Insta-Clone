import React from "react";
import PropTypes from 'prop-types';

const Comments = (props) => {
    return(
    <div className="CommentText">
        <span className="user">{props.comments.username}</span>
        <span className="comment">{props.comments.text}</span>
    </div>
    )
}

Comments.propTypes = {
    comments: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comments;