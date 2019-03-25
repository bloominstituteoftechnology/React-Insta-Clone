import React from 'react';

const CommentInput = props => {
    return (
        <div>
            <form>
                <input
                    type = 'text'
                    placeholder = "Post A Comment"
                />
            </form>
        </div>
    )
}

export default CommentInput;