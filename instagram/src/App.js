import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostPage from './components/PostContainer/PostPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostPage />
      </div>
    );
  }
}

export default App;
