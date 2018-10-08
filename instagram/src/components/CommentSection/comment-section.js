import React from 'react';
import dots from '../../images/dots.svg'
import '../CommentSection/CommentSection.css'

const CommentSection = (props) => {
    return (
        <div className ='addComment'>
            <form action = 'submit'>
                <input type = 'text' placeholder = 'Add a comment...' /> 
            </form>
            <img src={dots} alt = 'options for commenting' />

        </div>
    )
}

export default CommentSection;
