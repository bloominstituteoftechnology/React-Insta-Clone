import React from 'react';
import './comment-section.css';

const AddAComment = (props) => {
    return (
        <div className='add-container'>
     <form onSubmit={props.addComment}>
            <input type='text' onSubmit = {props.addComment} onChange={props.handleChange}  placeholder =' Add a comment...' />
     </form>
        </div>
    );
};

export default AddAComment;