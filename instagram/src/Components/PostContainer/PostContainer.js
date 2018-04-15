import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = () => {
return (
    <div className='PostContainer'>
        <div className='User'>
            <div>User Icon</div>
            <div>User Name</div>
        </div>
        <div className='PostImage'>IMG</div>
        <div className='interact'>
            <div>Heart Button</div>
            <div>Comment Bubble</div>
        </div>
        <div className='likeCount'> 400 Likes </div>
        <div className='comments'>
            <CommentSection />
        </div>
        <div className='time'>2 Hours Ago</div>
    </div> 
)};

export default PostContainer;