import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer'

class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            dummyData: []
        };
    }

    componentDidMount () {
        this.setState({ dummyData: dummyData });
    }

    render () {
        return (
            <div className="App">
                <SearchBar />
                <PostContainer posts={this.state.dummyData} />
            </div>
        );
    }
}

export default PostPage;