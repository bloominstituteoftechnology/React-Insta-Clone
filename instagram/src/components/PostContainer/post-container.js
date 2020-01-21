import React from 'react';
import Post from './post'
import './post-container.css'

const PostContainer = props => {
    console.log(props.dummyData)
    return (
        <div className="post-container">
            {props.dummyData.map(p => <Post key={p.imageUrl} post={p} />)} 
        </div>

    );
};

export default PostContainer;