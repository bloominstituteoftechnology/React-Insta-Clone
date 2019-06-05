import React from 'react';

export default function AddComment (props) {
    return (
        <div
          className='add-comment'>
            <form
              onSubmit={props.submitComment}>
            <input 
              className='comment-form'
              type='text'
              placeholder='Add a Comment....'
              value={props.comment}
              onChange={props.onChange}
            />
            </form>
            
        </div>

    );
};