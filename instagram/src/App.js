import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
