import React from 'react';
import PropTypes from 'prop-types';
import {CommentFormContainer} from '../Styles/ReusableStyles';

// Return CommentForm
// Props: comment={this.state.comment} handleChange={this.handleCommentChange} handleSubmit={this.handleCommentSubmit}
const CommentForm = props => {
    return (
        <CommentFormContainer>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.comment}
                    placeholder="Add comment... "
                    onChange={props.handleChange}
                />
                <button type="submit"><span>...</span></button>
            </form>
        </CommentFormContainer>
    );
};

// prop-type check
CommentForm.propTypes = {
    comment: PropTypes.string
};

export default CommentForm;