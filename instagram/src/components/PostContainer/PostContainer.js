import React from 'react';
import PostDetails from './PostDetails';

const PostContainer = (props) => {
    if(!props.postPassedAhead) {
        return <h3>Post Data Loading ..</h3>
    }
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
