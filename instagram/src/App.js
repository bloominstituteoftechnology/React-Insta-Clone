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
            posts: [],
            searchText: ''
        }
    }

    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(e.target.value);
    }

    render() {
        return ( 
            <>
                <SearchBar 
                    searchText={this.searchText} 
                    handleChange={this.handleChange}
                />

                <Posts 
                    posts = { this.state.posts } 
                    handleChange={this.handleChange} 
                    commentText={this.state.commentText}
                />  
            </>
        );
    }
}

export default App;