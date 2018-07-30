import React from 'react';
import Comment from './Comment.js';
const CommentSection=prop=>{
    return (
        prop.data.map(e=><Comment data={e}/>),
        <div>
        <input type='text' placeholder='Add a comment...'/><i class="fas fa-ellipsis-h"></i>
        </div>
    )
};

export default CommentSection;