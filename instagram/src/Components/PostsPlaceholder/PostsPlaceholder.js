import React from 'react';
import PostContainer from '../PostContainer/PostContainer'

const PostsPlaceholder = props => {

    return (
        <div className='posts-placeholder'>
            {props.posts.map( post => (
                <PostContainer 
                    posts={post}
                />
            ))}
        </div>
    );
}
 
export default PostsPlaceholder;