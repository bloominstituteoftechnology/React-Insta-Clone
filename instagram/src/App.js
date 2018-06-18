import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    constructor() {
        super();

        this.state = {
            dummydata: dummyData
        }
    }
    render() {
        return (
            <div className="App">
                <SearchBar />
                <PostContainer data={this.state.dummydata} />
            </div>
        );
    }
}

export default App;
