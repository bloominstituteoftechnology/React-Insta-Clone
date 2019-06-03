import React from 'react';

export default function AddComment (props) {
    return (
        <div
          className='add-comment'>
            <input 
              className='comment-form'
              type='text'
              placeholder='Add a Comment'
              onChange={props.onChange}
            />
            <button
              className='add-comment-button'
              onClick={props.onClick}
            >...</button>
        </div>

    );
};