import React, { Component } from 'react';
import './App.css'
import PostsPage from "./components/Posts/PostsPage";
import Authenticate from "./components/authentication/authenticate";


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <PostsPage/>
            </div>
        );
    }
}

export default Authenticate(App)