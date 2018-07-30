import React from 'react';
import Comment from './Comment.js';
const CommentSection=prop=>{
    return (
        prop.data.map(e=><Comment data={e}/>),
        <input type='text' placeholder='Add a comment...'/>
    )
};

export default CommentSection;