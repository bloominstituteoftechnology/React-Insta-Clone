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
        <div className='PostImage'>
            <img src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mlOrZMOb8g_012HwyTW73wHaEo%26pid%3D15.1&f=1'/>
        </div>
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