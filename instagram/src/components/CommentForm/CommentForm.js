import React from 'react';

import './CommentForm.css';
import PropTypes from 'prop-types';

// Return CommentForm
// Props: comment={this.state.comment} handleChange={this.handleCommentChange} handleSubmit={this.handleCommentSubmit}
const CommentForm = props => {
    return (
        <div className="comment-form-container">
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.comment}
                    placeholder="Add comment... "
                    onChange={props.handleChange}
                />
                <button type="submit"><span>...</span></button>
            </form>
        </div>
    );
};

// prop-type check
CommentForm.propTypes = {
    comment: PropTypes.string
};

export default CommentForm;