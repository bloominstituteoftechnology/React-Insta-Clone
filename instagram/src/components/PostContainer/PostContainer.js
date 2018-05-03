import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import Post from '../Post/Post.js';

const PostContainer = props =>{
   const insta = props.instaPost.map((postData, index) => {
                return (
                    <Post key={index} postData={postData} />
                ); 
            })
    
    return (
        <div>
            {insta[0]}
            {insta[1]}
            {insta[2]}
        </div>
    )
}

export default PostContainer;