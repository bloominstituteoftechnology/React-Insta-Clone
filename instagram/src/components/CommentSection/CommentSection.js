import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";

const Comment = props => {
    return(
        <div>
            {props.comments.map((comment,i) =>
                <div key={i}>
                    <div class='comment'><span>{comment.username}</span> {comment.text}</div>   
                </div>
            )}
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;