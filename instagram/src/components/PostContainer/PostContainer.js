import React from 'react';
import PostDetails from './PostDetails';

const PostContainer = (props) => {
    if (!props.postPassedAhead.length) {
        return <h1>Loading ...</h1>;
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
