import React from 'react';
import Post from '../Post/Post';
import {PostsContainer} from '../Styles/ReusableStyles';

// Return PostContainer
// Props: posts={this.state.posts}
const PostContainer = props => {
    return (
        <PostsContainer>
            {/* Iterate over each post, assign each post key to imageUrl, and pass each post data as prop */}
            {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
        </PostsContainer>
    );
};

export default PostContainer;