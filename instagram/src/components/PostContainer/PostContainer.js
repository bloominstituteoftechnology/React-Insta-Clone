import React from 'react';
import './PostContainer.css';
import Post from './Post'


const PostContainer = props => {
    // Each PostContainer component will then pass the array of comments on 
    // each post object as a prop to an instance of the CommentSection component.
    return (
        <div>
            <Post posts={props.posts} />
        </div>
    );
}

export default PostContainer;