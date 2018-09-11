import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import Post from './Post';


class PostContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: dummyData
        }
    }
    render() {
        return (
            <div className="post-container">
                {this.state.posts.map(post => <Post post = {post} /> )} 
            </div>
        );
    }
}

export default PostContainer;