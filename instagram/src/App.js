import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <SearchBar />

        <hr />

        {this.state.data.map(data => {
          return (
            <PostContainer
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
            />
          );
        })}

      </div>
    );
  }
}

export default App;
