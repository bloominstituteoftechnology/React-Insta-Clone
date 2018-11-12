import React, { Component } from 'react';
import './util/reset.sass';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostContainer/PostList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: dummyData
        };
    }
    render() {
        return (
            <div className="App">
                <SearchBar />
                <PostList posts={dummyData} />
            </div>
        );
    }
}

export default App;
