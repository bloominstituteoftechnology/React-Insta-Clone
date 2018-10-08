import React from 'react';
import PostHeader from 'PostHeader.js';
import PostDetails from 'PostDetails.js';

const PostContainer = (props) => {
    return (
        <div>
            <PostHeader />
            {props.postPassedAhead.map((post, i) => (
                <div>
                     <h2> Name :  {post.username} </h2>  
                </div>         

            ))
            }
        </div> 
    )
};

export default PostContainer;
