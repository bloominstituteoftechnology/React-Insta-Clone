import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
    <div className="App">
          <PostContainer liked={props.liked} minusLike={props.minusLike} addLike={props.addLike} instaPost={props.instaPost}/>
    </div>
    )
}

export default PostsPage;