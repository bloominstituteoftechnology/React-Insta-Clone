import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
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

export default App;
