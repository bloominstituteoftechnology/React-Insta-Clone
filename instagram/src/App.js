import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    return (
      <div>
        <header>
          <i className="fab fa-instagram"></i>
          <SearchBar />
          <div className="header-icons">
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
          </div>
        </header>
        <div>
          {this.state.dummyData.map(postData => {
            return (
              <PostContainer postData={postData} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
