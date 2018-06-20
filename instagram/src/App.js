import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

// Render SearchBar and PostContainer
class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                {/* Pass all posts as prop*/}
                <PostContainer posts={this.state.posts} />
            </div>
        );
    }
}

export default App;