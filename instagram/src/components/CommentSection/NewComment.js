import React from 'react';

const NewComment = props => {
    return (
        <form onChange={props.handleChange} onSubmit={props.addNewComment}>
            <input  type="text" name="newComment" placeholder="Add comment..." onfocus="this.value='"    />
            
        </form>
    )
}

export default NewComment;