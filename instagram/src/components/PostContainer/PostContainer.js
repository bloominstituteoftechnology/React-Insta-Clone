import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props =>{
    return(
        <div>
            {/* <h1>{props.data.username}</h1> */}
            <CommentSection />
        </div>
    )
}

export default PostContainer;