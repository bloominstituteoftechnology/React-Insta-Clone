import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';

// Data
import dummyData from './dummy-data';

class App extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }

    render() {
        return ( <>
            <SearchBar / >

            <Posts posts = { this.state.posts } />  
            </>
        );
    }
}

export default App;