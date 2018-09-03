import React from 'react';
import Post from './Post';
import './Post.css';

const PostContainer = (props)=> {
    return (
        <div className='post'>
           {props.post.map(post=> <Post key={post.imageUrl} post={post} />)}
        </div>
    );
};

export default PostContainer;