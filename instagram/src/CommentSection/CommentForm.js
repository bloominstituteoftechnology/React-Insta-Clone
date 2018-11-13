import React from 'react';
import './CommentForm.css';
import PropTypes from 'prop-types';

const CommentForm = props => {
    return(
        <div className="add-comment">
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
        </div>
    );
}

CommentForm.propTypes ={
    newComment: PropTypes.string,
    handleChanges: PropTypes.func,
}

export default CommentForm;