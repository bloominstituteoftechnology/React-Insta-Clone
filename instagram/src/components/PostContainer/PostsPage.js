import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            dummydata: [],
            searchString: '',
        }
    }

    componentDidMount() {
        this.setState({ dummydata: dummyData })
    }

    searchInput = event => {
        this.setState({ searchString: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <SearchBar value={this.state.searchString} onChange={this.searchInput} />
                <PostContainer searchString={this.state.searchString} data={this.state.dummydata} />
            </div>
        );
    }
}

export default PostsPage;