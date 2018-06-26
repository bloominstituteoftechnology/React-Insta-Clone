import React from 'react';
import Post from '../Post/Post.js';
import './PostContainer.css';

const PostContainer = props =>{
    return (
        <div>
            {props.instaPost.map((postData, index) => {
                return (
                 <Post key={index} postData={postData} />
                ); 
            })}
        </div>
    )
}

export default PostContainer;