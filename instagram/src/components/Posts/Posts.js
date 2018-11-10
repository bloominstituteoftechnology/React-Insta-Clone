import React from 'react';
import PostContainer from '../PostContainer/PostContainer';

const Posts = props => {
    return (
        <div>
            {props.data.map(post => (
                <PostContainer 
                    key={post.timestamp}
                    post={post}
                />
            ))}
        </div>        
    );
}

export default Posts;