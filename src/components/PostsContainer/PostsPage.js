import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import { SearchBar } from '../../components/SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: [],
            searchFor: ""
        };
    }
    componentDidMount() {
        this.setState({ posts: dummyData });
    }
    handleSearch = e => {
        let filteredPosts = this.state.posts;
        const posts = filteredPosts.filter(p =>
            p.username.includes(e.target.value));
        alert(this.state.filteredPosts.length);
        this.setState({ filteredPosts: posts });
    };
    render() {
        return (
            <div className="App">
                <SearchBar
                    searchFor={this.state.searchFor}
                    searchHandler={this.handleSearch}
                />
                <PostsContainer
                    posts={
                        this.state.filteredPosts.length > 0
                            ? this.state.filteredPosts
                            : this.state.posts
                    }
                />
            </div>
        );
    }
}

export default PostsPage;