import React from 'react';
import { AddComment } from './StyledCommentForm'
import PropTypes from 'prop-types';

const CommentForm = props => {
    return(
        <AddComment>
            <form onSubmit={props.addNewComment}>
                <input 
                    type="text" 
                    name="newComment"
                    placeholder="Add a comment..."
                    value={props.newComment}
                    onChange={props.handleChange}
                />
            </form>
            <i className="fas fa-ellipsis-h"></i>
        </AddComment>
    );
}

CommentForm.propTypes ={
    newComment: PropTypes.string,
    handleChanges: PropTypes.func,
}

export default CommentForm;