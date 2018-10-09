import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';


const PostContainer = function (props) {
    return (
        <div className='post-container'>
            Post Container!!
            <CommentSection />
            <CommentSection />
            <CommentSection />
    </div>
    )
};



export default PostContainer;