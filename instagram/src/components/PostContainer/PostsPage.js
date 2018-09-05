import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            searchPosts: ""
        };
    }

    searchPosts = e => {
        e.preventDefault();
        let newPosts = [...this.state.posts];
        newPosts = newPosts.filter(post => {
            return post.username === this.state.searchPosts;
        });
        this.setState({ posts: newPosts });
    }


    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    render() {
        return (
            <div className="App">
                <SearchBar
                    searchPosts={this.searchPosts}
                    handleChange={this.handleChange}
                />
                <PostContainer
                    posts={this.state.posts}
                    inputText={this.state.inputText}

                />
            </div>
        );
    }
}

export default PostsPage;