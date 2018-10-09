import React from "react";
import PropTypes from "prop-types";

const AddComment = props => {
    return (
        <div className="comment-section-footer">
            <p>{props.post.timestamp}</p>
            <form onSubmit={props.addNewComment}>
            <input 
            name="newComment" 
            placeholder="Add a comment..." 
            value={props.newComment}
            onChange={props.textInputHandler} >
            </input>
            </form>
        </div>
    );
}

AddComment.propTypes = {
    post: PropTypes.shape({
      timestamp: PropTypes.string.isRequired
    })
  };

export default AddComment;