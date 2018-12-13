import React from 'react';
import Post from './post';


const PostContainer = (props) => {
    return (
        <div>
            {props.posts.map(post => (
                <div>
                    <Post userName={post} key={post.timestamp} />
                    
                </div>
            ))}
        </div>
    );
}

export default PostContainer;