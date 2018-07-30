import React from 'react';
import PropTypes from "prop-types";

const CommentSection = props => {
    return(
        <div>
            {props.comments.map((comment,i) =>
                <div key={i}>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </div>
            )}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;