import React, { Component } from 'react';
import logo from './logo.svg';
import PostsPage from "./components/PostContainer/PostPage";
import Authenticate from "./components/Authentication/Authenticate";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

const App = Authenticate(
  class App extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div className="App">
          <PostsPage />
        </div>
      );
    }
  }
);

export default App;