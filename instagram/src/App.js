import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  render() {
    return (

      <div className="App">

        <SearchBar/>
        <PostContainer/>

        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>

      </div>
    );
  }
}

export default App;
