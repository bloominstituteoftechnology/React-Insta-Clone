import React from 'react';

import Post from './post';

import './postcontainer.css';


const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map(p => <Post key={p.id} post={p} />)} 
        </div>
        

    );
};

export default PostContainer;