import React from 'react';
import PostDetails from './PostDetails';

const PostContainer = (props) => {
    return (
        <div>
            {props.postPassedAhead.map((post, i) => (
               <PostDetails 
                        key = {post.imageUrl}
                        postDetail = {post} 
                />    
            ))
            }
        </div> 
    )
};

export default PostContainer;
