import React from 'react';
import './comment-section.css';

const AddAComment = () => {
    return (
        <div class='add-container'>
        <form>
            <input type='text' placeholder = ' Add a comment...' />
            </form>
        </div>
    );
};

export default AddAComment;