import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = ({posts}) => {
    return (
        <div className="post-container" >
            {posts.map((post, i) => <Post content={post} key={i}/>)}
        </div>
    );
}

export default PostContainer;
