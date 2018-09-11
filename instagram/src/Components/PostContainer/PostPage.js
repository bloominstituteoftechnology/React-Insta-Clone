import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: dummyData
        }
    }
    render() {
        return (
            <div className="post-container">
                <SearchBar />
                <PostContainer posts = {this.state.posts} />
            </div>
        );
    }
}

export default PostPage;