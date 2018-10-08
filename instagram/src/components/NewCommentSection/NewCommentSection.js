import React from 'react';
import './NewCommentSection.css';

const NewCommentSection = props =>{
    return(
        <div>
            <div className='new-comment-section'>
                <div className='new-comment-add'><p>Add a comment...</p></div>
                <div className='new-comment-tools'><p>...</p></div>
            </div>
        </div>
    )
}

export default NewCommentSection;
