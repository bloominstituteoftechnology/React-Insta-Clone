import React from 'react';

const AddComment = props => {
    return(
        <form onSubmit={props.submitComment}>
            <input type="text" placeholer="Add comment..." value={props.comment} onChange={props.commentHandler}/>
        </form>
    )
}

export default AddComment;