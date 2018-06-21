import React from 'react';

const CommentInput = props => {
    return (
        <div><form onSubmit={props.addComment}>
                        <input type='text'
                            className='form'
                            placeholder='Add a comment...'
                            value={props.comment}
                            onChange={props.handleComment}
                            />
                        </form>
                </div>
    )
}

export default CommentInput;