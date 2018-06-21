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
            posts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    render() {
        return (
            <AppContainer>
                <SearchBar posts={this.state.posts} />
                {/* Pass all posts as prop*/}
                <PostContainer posts={this.state.posts} />
            </AppContainer>
        );
    }
}

export default PostPage;