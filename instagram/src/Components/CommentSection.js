import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment"

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => {
                return (
                    <Comment comment={comment}/>
                )
            })}
        </div>
    )
}
CommentSection.propTypes = {
    comments: PropTypes.string.isRequired
}

export default CommentSection;