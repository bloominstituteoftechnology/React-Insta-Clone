import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from './PostContainer';
import SearchBar from "../SearchBar/SearchBar";
import {AppContainer} from '../Styles/ReusableStyles';

// Render SearchBar and PostContainer
class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    handleSearch = (e) => {
        const posts = this.state.posts.filter(post => {
            if(post.username.includes(e.target.value)) {
                return post;
            } else {
                return null;
            }
        });
        this.setState({filteredPosts: posts});
    };

    render() {
        return (
            <AppContainer>
                <SearchBar
                    posts={this.state.posts}
                    handleSearch={this.handleSearch}
                    />
                {/* Pass all posts as prop*/}
                <PostContainer posts={
                    this.state.filteredPosts.length > 0 
                    ? this.state.filteredPosts 
                    : this.state.posts
                    }
                />
            </AppContainer>
        );
    }
}

export default PostPage;