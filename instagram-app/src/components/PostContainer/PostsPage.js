import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }
    componentDidMount() {
        this.setState({ posts: dummyData });
    }
}

searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
        if (p.username.includes(e.target.value)) {
            return p;
        }
    })
}