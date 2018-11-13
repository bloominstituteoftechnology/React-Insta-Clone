import React from 'react';
import './CommentForm.css';
import PropTypes from 'prop-types';

const CommentForm = props => {
    return(
        <div className="add-comment">
            <form>
                <input 
                    type="text" 
                    name="newComment"
                    placeholder="Add a comment..."
                    value={props.newComment}
                    onChange={console.log(props.handlesChange)}
                />
            </form>
            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}

CommentForm.propTypes ={
    newComment: PropTypes.string,
    handlesChanges: PropTypes.func,
}

export default CommentForm;