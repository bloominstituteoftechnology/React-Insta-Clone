import React from 'react';
// import CommentSection from '../CommentSection/CommentSection.js';
import Post from '../Post/Post.js';

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