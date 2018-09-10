import React from 'react';

const NewComment = props => {
    return (
        <form>
            <input  type="text" value={props.newComment} placeholder="Add comment... " onSubmit={(event) => {props.addComment(event)}} onChange={props.handleChange} />
        </form>
    )
}

export default NewComment;