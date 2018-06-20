import React from 'react';

const CommentForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                onChange={props.handleChange}
            />
        </form>
    );
};

export default CommentForm;