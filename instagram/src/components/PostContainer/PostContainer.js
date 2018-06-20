import React from 'react';
import Post from '../Post/Post';

import './PostContainer.css';

// Return PostContainer
// Props: posts={this.state.posts}
const PostContainer = props => {
    return (
        <div className="posts-container">
            {/* Iterate over each post, assign each post key to imageUrl, and pass each post data as prop */}
            {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
        </div>
    );
};

export default PostContainer;