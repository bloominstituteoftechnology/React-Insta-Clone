import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: [],
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    searchPostsHandler = event => {
        const posts = this.state.posts.filter(param => {
        if (param.username.includes(event.target.value)) {
            return param;
        }
    });
        this.setState({ filteredPosts: posts });
    };

    render() {
        return (
            <div>
                <SearchBar 
                searchPosts={this.searchPostsHandler}
                />

                <PostContainer 
                posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} 
                />
            </div>
        );
    }
};

export default PostsPage;
