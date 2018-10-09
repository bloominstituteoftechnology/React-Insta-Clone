import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

const CommentSection = props => {
    const arr = props.arr;
    return(
        <div className="comments">
            {arr.map(comment => 
                <p><strong>{comment.username}</strong> {comment.text}</p>
            )}
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Add a comment..." />
            </form>
        </div>
    );
};

CommentSection.propTypes = {
    arr: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })).isRequired
}

export default CommentSection;