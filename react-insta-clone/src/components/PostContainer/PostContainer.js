import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    // console.log('containerProps', props.posts);
    return (
        <div className='posts-container-wrapper'>
            {props.posts.map(p =>
            <Post key={p.imageUrl} post={p} />
            )}
        </div>
    );
};

export default PostContainer;