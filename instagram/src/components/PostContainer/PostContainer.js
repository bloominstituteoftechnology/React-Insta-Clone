import React, { Component } from 'react';
import dummyData from '../../dummy-data.js';
import './Post.css';
import Post from './Post';

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            thumbnailUrl: "",
            username: "",
            likes: 0,
            comments: []
        };
    }

    componentDidMount() {
        this.setState({ 
            id: 0,
            thumbnailUrl: "",
            username: "",
            likes: 0,
            comments: [] 
        });

    }

    return (
<div className="post-container">
    {props.posts.map(p => <Post key={p.imageURL} post={p} />)}
</div>
    );
};


export default PostContainer;