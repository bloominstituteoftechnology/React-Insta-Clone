import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return(
        <div>
            <PostContainer posts={props.posts} />
        </div>
    );
}

export default PostsPage;