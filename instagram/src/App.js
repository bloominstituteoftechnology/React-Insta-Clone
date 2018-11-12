import React, { Component } from 'react';
import PostContainerList from './components/PostContainer/PostContainerList';
import dummyData from './components/dummy-data';
import './Style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="main-header">{/* camera | Instagram search-bar circle-diamond heart person */}</header>
        <div className="app-container">
          <PostContainerList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
