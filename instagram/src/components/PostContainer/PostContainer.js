import React, { Component } from 'react';
import Post from './components/Post'

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(eachPost => <Post key= {imageURL} post= {eachPost} />)};
        </div>
    );
};

export default PostContainer;