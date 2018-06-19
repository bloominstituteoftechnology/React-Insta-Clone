import React from 'react'

const AddComment = props => {
    return (
        <form>
            <input
                className="comment-bar"
                type="text"
                placeholder="Add a comment..."
                onSubmit={() => props.postSubmitProp()}
            />
        </form>
    )
}

export default AddComment;