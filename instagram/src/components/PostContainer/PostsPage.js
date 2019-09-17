import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => (
    <div>
        {props.post.map(
            post => {
                return (
                <PostContainer key={post.username} post={post} />
                )
            })}
    </div>
)
export default PostsPage;