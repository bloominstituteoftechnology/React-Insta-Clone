import React, { Component } from 'react';
import './util/reset.sass';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        this.setState({
            posts : dummyData
        });
    }
    render() {
        return (
            <div className="App">
                <PostsPage posts={dummyData} />
            </div>
        );
    }
}

export default Authenticate(App);
