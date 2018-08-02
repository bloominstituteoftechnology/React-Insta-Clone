import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer'

class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            dummyData: [],
            input: []
        };
    }

    searchInput = event => {
        this.setState ({ input: event.target.value })
    }

    searchFunction = event => {
        event.preventDefault();
        let filterData = this.state.dummyData.filter(element => element.username.includes(this.state.input));
        this.setState({ dummyData: filterData });
    }

    componentDidMount () {
        this.setState({ dummyData: dummyData });
    }

    render () {
        return (
            <div className="post-page">
                <SearchBar search={ this.searchFunction } searchPost={ this.searchInput } />
                <PostContainer posts={this.state.dummyData} />
            </div>
        );
    }
}

export default PostPage;