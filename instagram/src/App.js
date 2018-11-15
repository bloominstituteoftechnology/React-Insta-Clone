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

        // this.
    }

    componentDidMount() {
        this.setState({
            posts: dummyData.map((d, i) => ({...d, modal: false, key: i }))
        })
    }

    toggleComments = post => {

        this.setState({
            posts: this.state.posts.map(p => {
                return p.id === post.id ? (p.modal === false ? {...p, modal: true} : {...p, modal: true}) : {...p, modal: false}
                // p.id === post.id ? console.log(true) : console.log(false)
            })
        }, console.log(this.state))


        // console.log(post)
    }

    render() {
        return ( <>
            <SearchBar / >

            <Posts 
                posts = { this.state.posts }
                toggleComments = { this.toggleComments }
            />  
            </>
        );
    }
}

export default App;