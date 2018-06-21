import React from 'react';
import { CommentForm, AddComment, MoreIcon } from '../ReusableComponents/CommentSection';

const CommentInput = props => {
    return (
        <CommentForm onSubmit={props.addComment}>
            <AddComment className='add-comment'
                type='text'
                value={props.comment}
                placeholder='Add a comment...'
                onChange={props.handleInput}
            />
            <MoreIcon src="https://png.icons8.com/metro/50/000000/more.png" alt='' />
        </CommentForm>
    );
};

export default CommentInput;