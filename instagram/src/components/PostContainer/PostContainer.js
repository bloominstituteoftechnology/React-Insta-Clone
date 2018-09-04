import React, { Component } from 'react';
import Post from './Post.js'

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.dummyData.map(data => (
                <Post
                    dummyData={data}
                    key={data.timestamp}
                />
                
            ))}
        </div>);
}

export default PostContainer;