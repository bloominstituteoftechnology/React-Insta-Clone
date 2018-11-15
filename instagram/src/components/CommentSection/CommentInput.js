import React from 'react';
import './comment.css'
import PropTypes from "prop-types";

function CommentInput(props) {
    return (
        <form 
        className='add-comment-container' 
        onSubmit={props.submitComment}>
            <input 
                type="text" 
                value={props.comment}
                placeholder='Add comment . . .'
                onChange={props.changeComment}
            />
        </form>
    );
}

CommentInput.propTypes = {
    comment: PropTypes.string,
    submitComment: PropTypes.func,
    changeComment: PropTypes.func,
}

export default CommentInput;