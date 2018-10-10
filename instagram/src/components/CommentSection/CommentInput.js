import React from 'react';
import dots from '../../images/dots.svg'

const CommentInput = props => {
    return (
        <div className = 'CommentSubmit'>
            <form onSubmit = {props.submitComment}>
                <input 
                    type = 'text'
                    value = {props.comment}
                    placeholder = 'Add comment...'
                    onChange = {props.changeComment}
                    />
            </form>
            <img src={dots} alt = 'options for commenting' />
            </div>
        );
};

export default CommentInput;
