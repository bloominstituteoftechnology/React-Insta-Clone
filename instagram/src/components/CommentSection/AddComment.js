import React from 'react';
import More from '../../img/more-horizontal.svg';

const AddComment = props => {
    return (
        <div className="add-comment">
            <form className="add-comment-form">
                <input type="text" placeholder="Add a comment..." className="add-comment-input" />
            </form>
            <img src={More} alt="more options" />
        </div>
    );
}

export default AddComment;