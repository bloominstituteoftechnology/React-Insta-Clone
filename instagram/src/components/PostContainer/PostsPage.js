import React from 'react';
import PostContainer from './PostContainer'

const PostsPage = props => {
    return(
        <div>
            <PostContainer name={props.name} />
        </div>
    );
}

export default PostsPage;