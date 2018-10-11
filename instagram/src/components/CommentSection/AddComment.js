import React from 'react';
import More from '../../img/more-horizontal.png';

const AddComment = props => {
    return (
        <div className="add-comment">
            <form className="add-comment-form" onSubmit={props.addNewComment}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="add-comment-input"
                    onChange={props.changeHandler}
                    name={props.id}
                    value={props.newComment}
                    />
            </form>
            <img src={More} alt="more options" />
        </div>
    );
}

export default AddComment;