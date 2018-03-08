import React from 'react';
import Post from './Post';
import'./postContainer.css';

const PostContainer =(props) => {
    return (
        <div className="PostContainer">
            {props.posts.map(post => {
                return <Post key={post.username} post={post}/>
            })}
        </div>
    )
};

export default PostContainer;