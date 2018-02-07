import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  state = dummyData;

  // createTimestamp = () => {
  //   const modifiedData = this.state.map((post) => {
  //     post['time'] = post.timestamp.substring(post.timestamp.search(', '), post.timestamp.lastIndexOf(':')), post.timestamp.substr(str.length - 3);
  //     return post;
  //   });
  //   this.setState( {modifiedData} );
  // }

  render() {
    return (
      <div className="App">
        {/*{this.createTimestamp()}*/}
        <SearchBar />
        {
          this.state.map(post => {
            return <PostContainer
              post={post} 
            />;
          })
        }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
