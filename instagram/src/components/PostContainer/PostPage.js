import React from 'react';
import PostContainer from './PostContainer';

const PostPage = props => {
    return(
        <PostContainer post={props.posts}/>
    )
}

export default PostPage;