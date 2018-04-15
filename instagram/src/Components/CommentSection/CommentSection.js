import React from 'react';
import Comment from '../Comment/Comment.js';

const CommentSection = () => {
    return (
    <div className='CommentSection'>
        <Comment user='Ben' note='This looks so cool!' />
        <Comment user='Anthony' note='Dude! Lit AF!!!' />
        <Comment user='Lilia' note="why don't you respond to my DMS!?" />
        <div className='addComment'>
            <input type='text' value='Add A Comment'></input>
            <button> ... </button>
        </div>

    </div>
    )};

export default CommentSection;