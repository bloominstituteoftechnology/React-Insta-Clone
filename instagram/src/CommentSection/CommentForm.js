import React from 'react';
import './CommentForm.css';

const CommentForm = props => {
    return(
        <div className="add-comment">
            <form>
                <input type="text" placeholder="Add a comment..."/>
            </form>
            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}

export default CommentForm;